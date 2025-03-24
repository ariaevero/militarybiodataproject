const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  serviceNo: String,
  email: String,
  password: String,
  role: { type: String, enum: ['personnel', 'nurse', 'doctor', 'admin'], default: 'personnel' }
});

module.exports = mongoose.model('User', userSchema);
