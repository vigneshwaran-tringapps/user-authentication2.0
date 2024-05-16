const mongoose = require('mongoose');

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Mongodb connected successfully.');
  } catch (error) {
    console.log('Database connection error: ', error);
  }
};

module.exports = db;