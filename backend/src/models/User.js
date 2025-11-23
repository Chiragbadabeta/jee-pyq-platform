import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    minlength: 6
  },
  googleId: {
    type: String,
    sparse: true
  },
  avatar: String,
  bookmarks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }],
  testHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TestAttempt'
  }],
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student'
  }
}, {
  timestamps: true
});

// Index for faster email lookups
userSchema.index({ email: 1 });

export default mongoose.model('User', userSchema);