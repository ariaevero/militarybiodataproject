const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { serviceNo, email, password, role = 'personnel' } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ serviceNo, email, password: hashed, role });
    await user.save();
    res.json({ msg: 'Registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  const { serviceNo, password } = req.body;
  try {
    const user = await User.findOne({ serviceNo });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, 'secretkey');
    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
