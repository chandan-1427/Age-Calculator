import React, { useRef } from 'react';
import { Calendar } from 'lucide-react';

export default function AgeInput({ birthDateStr, setBirthDateStr, onEnter, resetAge, clearError }) {
  const hiddenDateRef = useRef(null);

  const formatDate = (isoDate) => {
    const [year, month, day] = isoDate.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="dd/mm/yyyy"
        value={birthDateStr}
        onChange={(e) => setBirthDateStr(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onEnter()}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Calendar
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
        size={18}
        onClick={() => hiddenDateRef.current.click()}
      />

      <input
        type="date"
        ref={hiddenDateRef}
        onChange={(e) => {
          if (e.target.value) {
            setBirthDateStr(formatDate(e.target.value));
            clearError();
            resetAge();
          }
        }}
        className="hidden"
      />
    </div>
  );
}
