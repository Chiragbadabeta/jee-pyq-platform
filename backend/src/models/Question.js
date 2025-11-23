import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  subject: {
    type: String,
    enum: ['Physics', 'Chemistry', 'Mathematics'],
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
    min: 2000,
    max: 2024
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  type: {
    type: String,
    enum: ['MCQ', 'Integer', 'AssertionReason', 'MatchFollowing'],
    required: true
  },
  question: {
    type: String,
    required: true
  },
  options: [{
    text: String,
    isCorrect: Boolean
  }],
  correctAnswer: mongoose.Schema.Types.Mixed,
  explanation: String,
  tags: [String],
  marks: {
    type: Number,
    default: 4
  },
  negativeMarks: {
    type: Number,
    default: -1
  }
}, {
  timestamps: true
});

// Indexes for faster queries
questionSchema.index({ subject: 1, topic: 1 });
questionSchema.index({ year: 1 });
questionSchema.index({ difficulty: 1 });

export default mongoose.model('Question', questionSchema);