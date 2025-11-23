# JEE PYQ Platform - Complete Educational Website

A full-stack responsive educational platform for JEE aspirants to practice Previous Year Questions (PYQs) with custom test creation and performance analytics.

## 🚀 Features

- 📚 **Question Bank** with 10,000+ PYQs (Physics, Chemistry, Mathematics)
- 🎯 **Custom Test Builder** with filters (subject, topic, difficulty, year)
- 📊 **Analytics Dashboard** with performance tracking
- 🔐 **User Authentication** (Email/Password + Google OAuth)
- 🌙 **Dark Mode Support**
- 📱 **Mobile-First Responsive Design**
- ⏱️ **Timed Test Simulation**
- 🎨 **JEE Branding Colors** (Blue, Orange, White)

## 🛠️ Tech Stack

**Frontend:** React.js, Vite, Tailwind CSS, React Router, Axios, Recharts, React Icons

**Backend:** Node.js, Express.js, MongoDB, Mongoose

**Authentication:** JWT, Firebase Auth (Google)

**Deployment:** Vercel (Frontend), Render (Backend)

## 📦 Question Types

- Multiple Choice Questions (MCQ)
- Integer-type Questions
- Assertion-Reason Questions
- Match-the-Following Questions

## 🚀 Quick Start

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Configure MongoDB URI, JWT_SECRET in .env
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
# Configure API URL, Firebase keys in .env
npm run dev
```

### Seed Database

```bash
cd backend
npm run seed
```

## 📡 API Endpoints

**Auth:**
- POST `/api/auth/register`
- POST `/api/auth/login`
- POST `/api/auth/google`

**Questions:**
- GET `/api/questions` (with filters)
- GET `/api/questions/:id`
- GET `/api/questions/topics`

**Tests:**
- POST `/api/tests/create`
- POST `/api/tests/submit`
- GET `/api/tests/:id`

**Analytics:**
- GET `/api/analytics/user`

**User:**
- GET `/api/users/profile`
- PUT `/api/users/profile`
- POST `/api/users/bookmark/:questionId`

## 📁 Project Structure

```
jee-pyq-platform/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── styles/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── config/
│   └── package.json
└── README.md
```

## 🌐 Live Demo

- **Frontend:** [Deployed on Vercel]
- **Backend:** [Deployed on Render]

## 📝 License

MIT License

## 👨‍💻 Author

Created with ❤️ for JEE Aspirants
