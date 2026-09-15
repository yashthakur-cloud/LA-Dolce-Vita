const Booking = require('../models/Booking');
const Table = require('../models/Table');

const RESTAURANT_OPEN_MINUTES = 11 * 60;
const RESTAURANT_CLOSE_MINUTES = 23 * 60;

const isWithinRestaurantHours = (timeSlot) => {
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(timeSlot)) {
    return false;
  }

  const [hours, minutes] = timeSlot.split(':').map(Number);
  const timeInMinutes = hours * 60 + minutes;

  return (
    timeInMinutes >= RESTAURANT_OPEN_MINUTES &&
    timeInMinutes <= RESTAURANT_CLOSE_MINUTES
  );
};

const restaurantHoursMessage =
  'Reservations are available from 11:00 AM to 11:00 PM.';
const bookingDateMessage =
  'Reservations can only be made for tomorrow or a later date.';

const isBookableDate = (date) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return false;
  }

  const [year, month, day] = date.split('-').map(Number);
  const requestedDate = new Date(`${date}T00:00:00`);
  if (Number.isNaN(requestedDate.getTime())) {
    return false;
  }

  if (
    requestedDate.getFullYear() !== year ||
    requestedDate.getMonth() + 1 !== month ||
    requestedDate.getDate() !== day
  ) {
    return false;
  }

  const tomorrow = new Date();
  tomorrow.setHours(0, 0, 0, 0);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return requestedDate >= tomorrow;
};

// @route  GET /api/bookings/available?date=2026-08-20&timeSlot=19:00&guests=2
exports.getAvailableTables = async (req, res) => {
  try {
    const { date, timeSlot, guests } = req.query;

    if (!date || !timeSlot) {
      return res.status(400).json({ message: 'date and timeSlot are required' });
    }

    if (!isBookableDate(date)) {
      return res.status(400).json({ message: bookingDateMessage });
    }

    if (!isWithinRestaurantHours(timeSlot)) {
      return res.status(400).json({ message: restaurantHoursMessage });
    }

    
    const guestCount = Number(guests) || 1;
    const maxCapacity = Math.min(guestCount + 2, 10); // cap at 10

    if (guests && (guestCount < 1 || guestCount >= 10)) {
      return res.status(400).json({ message: 'Guests must be between 1 and 10' });
    }

    const bookedTableIds = await Booking.find({
      date,
      timeSlot,
      status: 'confirmed',
    }).distinct('table');

    
const availableTables = await Table.find({
  _id: { $nin: bookedTableIds },
  capacity: { $gte: guestCount, $lte: maxCapacity },
});

    res.json(availableTables);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @route  POST /api/bookings  (protected)
exports.createBooking = async (req, res) => {
  try {
    const { tableId, date, timeSlot, guests } = req.body;

    if (!tableId || !date || !timeSlot || !guests) {
      return res.status(400).json({ message: 'Missing required booking fields' });
    }

    if (!isBookableDate(date)) {
      return res.status(400).json({ message: bookingDateMessage });
    }

    if (!isWithinRestaurantHours(timeSlot)) {
      return res.status(400).json({ message: restaurantHoursMessage });
    }

    const guestCount = Number(guests);

    if (guestCount <= 1 || guestCount >= 10) {
      return res.status(400).json({ message: 'Guests must be from 1 to 10' });
    }

    const table = await Table.findById(tableId);
    if (!table) {
      return res.status(404).json({ message: 'Table not found' });
    }

    const alreadyBooked = await Booking.findOne({
      table: tableId,
      date,
      timeSlot,
      status: 'confirmed',
    });

    if (alreadyBooked) {
      return res.status(400).json({ message: 'This table is already booked for that time slot' });
    }

    const booking = await Booking.create({
      user: req.userId,
      table: tableId,
      date,
      timeSlot,
      guests: guestCount,
    });

    const populatedBooking = await booking.populate('table');

    res.status(201).json(populatedBooking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @route  GET /api/bookings/my  (protected)
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId })
      .populate('table')
      .sort({ date: 1, timeSlot: 1 });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @route  DELETE /api/bookings/:id  (protected)
exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (booking.user.toString() !== req.userId) {
      return res.status(403).json({ message: 'You can only cancel your own bookings' });
    }

    booking.status = 'cancelled';
    await booking.save();

    res.json({ message: 'Booking cancelled successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};