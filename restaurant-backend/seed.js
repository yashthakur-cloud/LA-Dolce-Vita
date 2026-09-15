// seed.js
// Run this once to populate your database with sample tables.
// Usage: node seed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Table = require('./models/Table');

dotenv.config();

const sampleTables = [
  { tableNumber: 1, capacity: 2, location: 'window' },
  { tableNumber: 2, capacity: 2, location: 'window' },
  { tableNumber: 3, capacity: 4, location: 'main hall' },
  { tableNumber: 4, capacity: 4, location: 'main hall' },
  { tableNumber: 5, capacity: 4, location: 'main hall' },
  { tableNumber: 6, capacity: 6, location: 'main hall' },
  { tableNumber: 7, capacity: 6, location: 'hall' },
  { tableNumber: 8, capacity: 8, location: 'hall' },
  { tableNumber: 9, capacity: 2, location: 'hall' },
  { tableNumber: 10, capacity: 10, location: 'private room' },
  { tableNumber: 11, capacity: 1, location: 'window' },
  { tableNumber: 12, capacity: 2, location: 'window' },
  { tableNumber: 13, capacity: 4, location: 'main hall' },
];

const seedTables = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    await Table.deleteMany(); // clears existing tables before reseeding
    await Table.insertMany(sampleTables);

    console.log(`${sampleTables.length} tables added successfully`);
    process.exit();
  } catch (err) {
    console.error('Seeding failed:', err.message);
    process.exit(1);
  }
};

seedTables();