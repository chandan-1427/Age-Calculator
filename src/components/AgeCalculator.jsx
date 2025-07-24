import React, { useState } from 'react';
import AgeInput from './AgeInput.jsx';
import AgeResult from './AgeResult.jsx';
import ErrorMessage from './ErrorMessage.jsx';

export default function AgeCalculator() {
  const [birthDateStr, setBirthDateStr] = useState('');
  const [age, setAge] = useState(null);
  const [error, setError] = useState('');

  const calculateAge = () => {
    setError('');
    if (!birthDateStr) return;

    const [day, month, year] = birthDateStr.split('/').map(Number);

    if (!day || !month || !year || day > 31 || month > 12 || year > new Date().getFullYear()) {
      setError('Please enter a valid date in dd/mm/yyyy format');
      setAge(null);
      return;
    }

    const birth = new Date(year, month - 1, day);
    if (isNaN(birth)) {
      setError('Invalid date format');
      setAge(null);
      return;
    }

    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <>
      <AgeInput
        birthDateStr={birthDateStr}
        setBirthDateStr={setBirthDateStr}
        onEnter={calculateAge}
        resetAge={() => setAge(null)}
        clearError={() => setError('')}
      />

      <button
        onClick={calculateAge}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        Calculate Age
      </button>

      <ErrorMessage error={error} />

      <AgeResult age={age} error={error} />
    </>
  );
}
