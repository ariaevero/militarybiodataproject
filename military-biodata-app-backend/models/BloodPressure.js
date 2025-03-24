const mongoose = require('mongoose');

const bloodPressureSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  systolic: Number,
  diastolic: Number,
  date: { type: Date, default: Date.now },
  comment: String,
  filledBy: String
});

module.exports = mongoose.model('BloodPressure', bloodPressureSchema);
