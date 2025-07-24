import React from 'react';

export default function ErrorMessage({ error }) {
  return (
    error && (
      <div className="mt-4 text-red-600 font-medium">{error}</div>
    )
  );
}
