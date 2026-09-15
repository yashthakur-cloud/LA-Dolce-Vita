const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true, unique: true },
  capacity: { type: Number, required: true },
  location: { type: String, default: 'main hall' }, // e.g. "window", "patio", "main hall"
});

module.exports = mongoose.model('Table', tableSchema);
