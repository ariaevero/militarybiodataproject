const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const MedicalForm = require('../models/MedicalForm');
const BloodPressure = require('../models/BloodPressure');
const AnnualCheckup = require('../models/AnnualCheckup');

// Submit or update medical biodata
router.post('/medical', auth, async (req, res) => {
  try {
    const form = await MedicalForm.findOneAndUpdate(
      { userId: req.user.id },
      { ...req.body, userId: req.user.id },
      { upsert: true, new: true }
    );
    res.json(form);
  } catch (err) {
    res.status(500).json({ error: 'Error saving medical form' });
  }
});

// Add weekly blood pressure
router.post('/bp', auth, async (req, res) => {
  try {
    const bp = new BloodPressure({ ...req.body, userId: req.user.id });
    await bp.save();
    res.json(bp);
  } catch (err) {
    res.status(500).json({ error: 'BP record failed' });
  }
});

// Submit annual checkup result
router.post('/annual', auth, async (req, res) => {
  try {
    const result = new AnnualCheckup({ ...req.body, userId: req.user.id });
    await result.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Annual checkup save failed' });
  }
});

// Confirm test results
router.put('/annual/:id/confirm', auth, async (req, res) => {
  try {
    const confirmed = await AnnualCheckup.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { confirmedByUser: true },
      { new: true }
    );
    res.json(confirmed);
  } catch (err) {
    res.status(500).json({ error: 'Confirmation failed' });
  }
});

// Dashboard chart stats
router.get('/stats', auth, async (req, res) => {
  try {
    const bp = await BloodPressure.find({ userId: req.user.id }).sort({ date: 1 });
    const annuals = await AnnualCheckup.find({ userId: req.user.id });
    res.json({ bp, annuals });
  } catch (err) {
    res.status(500).json({ error: 'Fetching stats failed' });
  }
});

module.exports = router;
