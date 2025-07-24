import React, { useState } from 'react';
import AgeInput from './AgeInput.jsx';
import AgeResult from './AgeResult.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import calculateAgeFromDOB from '../utils/calculateAge.js';

export default function AgeCalculator() {
  const [birthDateStr, setBirthDateStr] = useState('');
  const [age, setAge] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    const result = calculateAgeFromDOB(birthDateStr);
    if (result.error) {
      setError(result.error);
      setAge(null);
    } else {
      setAge(result.age);
      setError('');
    }
  };

  return (
    <>
      <AgeInput
        birthDateStr={birthDateStr}
        setBirthDateStr={setBirthDateStr}
        onEnter={handleCalculate}
        resetAge={() => setAge(null)}
        clearError={() => setError('')}
      />

      <button
        onClick={handleCalculate}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        Calculate Age
      </button>

      <ErrorMessage error={error} />
      <AgeResult age={age} error={error} />
    </>
  );
}
