import api from './api';

export const getAvailableTables = async (date, timeSlot, guests) => {
  const res = await api.get('/bookings/available', {
    params: { date, timeSlot, guests },
  });
  return res.data;
};

export const createBooking = async (tableId, date, timeSlot, guests) => {
  const res = await api.post('/bookings', { tableId, date, timeSlot, guests });
  return res.data;
};

export const getMyBookings = async () => {
  const res = await api.get('/bookings/my');
  return res.data;
};

export const cancelBooking = async (bookingId) => {
  const res = await api.delete(`/bookings/${bookingId}`);
  return res.data;
};