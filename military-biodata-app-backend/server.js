require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
  app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
}).catch(err => console.error('❌ Mongo error:', err));

const dashboardRoutes = require('./routes/dashboard');
app.use('/api/dashboard', dashboardRoutes);