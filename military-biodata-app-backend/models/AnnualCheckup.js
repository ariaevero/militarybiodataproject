const mongoose = require('mongoose');

const annualCheckupSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  resultSummary: String,
  testDate: Date,
  uploadedBy: String,
  confirmedByUser: { type: Boolean, default: false }
});

module.exports = mongoose.model('AnnualCheckup', annualCheckupSchema);
