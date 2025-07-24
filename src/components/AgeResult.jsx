import React from 'react';

export default function AgeResult({ age, error }) {
  if (!age || error) return null;

  if (age.years === 0 && age.months === 0 && age.days === 0) {
    return (
      <div className="mt-4 text-red-600 font-bold">
        Wow! You're just born 🎉
      </div>
    );
  }

  return (
    <div className="mt-6 text-lg md:text-xl font-medium text-blue-800 dark:text-blue-200">
      <span className="text-blue-800 dark:text-blue-500">You are&nbsp;</span>
      <span className="text-green-600 dark:text-green-500 font-semibold">
        {age.years} {age.years === 1 ? 'year' : 'years'}
      </span>
      {age.months > 0 && (
        <>
          <span className="text-blue-800 dark:text-blue-500">, </span>
          <span className="text-green-600 dark:text-green-500 font-semibold">
            {age.months} {age.months === 1 ? 'month' : 'months'}
          </span>
        </>
      )}
      {age.days > 0 && (
        <>
          <span className="text-blue-800 dark:text-blue-500">, and </span>
          <span className="text-green-600 dark:text-green-500 font-semibold">
            {age.days} {age.days === 1 ? 'day' : 'days'}
          </span>
        </>
      )}
      <span className="text-blue-800 dark:text-blue-500">&nbsp;old.</span>
    </div>
  );
}
