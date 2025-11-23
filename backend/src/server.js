import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jee-pyq')
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'JEE PYQ Backend is running' });
});

// API Routes (to be added)
app.get('/api', (req, res) => {
  res.json({ 
    message: 'JEE PYQ Platform API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      questions: '/api/questions',
      tests: '/api/tests',
      analytics: '/api/analytics',
      users: '/api/users'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Server Error',
    errors: err.errors
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});