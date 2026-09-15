const express = require('express');
const router = express.Router();
const {
  getAvailableTables,
  createBooking,
  getMyBookings,
  cancelBooking,
} = require('../controllers/bookingController');
const protect = require('../middleware/authMiddleware');

router.get('/available', getAvailableTables);
router.post('/', protect, createBooking);
router.get('/my', protect, getMyBookings);
router.delete('/:id', protect, cancelBooking);

module.exports = router;
