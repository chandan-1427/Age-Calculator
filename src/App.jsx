import React from 'react';
import AgeCalculator from './components/AgeCalculator.jsx';

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-purple-400 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Age Calculator</h1>
        <p className="mb-6 text-gray-600">
          Enter your date of birth in <strong>dd/mm/yyyy</strong> format
        </p>
        <AgeCalculator />
      </div>
    </div>
  );
}
