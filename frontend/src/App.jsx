import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-dark">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-primary mb-4">
            JEE PYQ Platform
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Master JEE with 10,000+ Previous Year Questions
          </p>
          
          <div className="card max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">🚀 Platform Features</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>📚 Question Bank with Physics, Chemistry & Mathematics</li>
              <li>🎯 Custom Test Builder with Advanced Filters</li>
              <li>📊 Analytics Dashboard for Performance Tracking</li>
              <li>🔐 Secure Authentication (Email + Google OAuth)</li>
              <li>🌙 Dark Mode Support</li>
              <li>📱 Mobile-First Responsive Design</li>
            </ul>
            
            <div className="mt-6 flex gap-4 justify-center">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Backend API: Ready for deployment</p>
            <p>Frontend: Built with React + Vite + Tailwind CSS</p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;