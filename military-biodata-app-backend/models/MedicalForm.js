const mongoose = require('mongoose');

const medicalFormSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bloodGroup: String,
  medicalHistory: String,
  otherMedical: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MedicalForm', medicalFormSchema);
