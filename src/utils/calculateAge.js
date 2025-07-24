export default function calculateAgeFromDOB(birthDateStr) {
  if (!birthDateStr) return { error: 'Date is required' };

  const [day, month, year] = birthDateStr.split('/').map(Number);

  if (!day || !month || !year || day > 31 || month > 12 || year > new Date().getFullYear()) {
    return { error: 'Please enter a valid date in dd/mm/yyyy format' };
  }

  const birth = new Date(year, month - 1, day);
  if (isNaN(birth)) {
    return { error: 'Invalid date format' };
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

  return { age: { years, months, days } };
}
