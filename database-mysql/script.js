function randomDate(start, end) {
  const date = new Date(+start + Math.random() * (end - start));
  return date;
}

function getStartDate() {
  const firstDayOfYear = new Date(2020, 0);
  const lastDayOfYear = new Date(2020, 11, 31);
  return (randomDate(firstDayOfYear, lastDayOfYear));
}

function getEndDate(startDate) {
  const lastDayOfYear = new Date(2020, 11, 31);
  return (randomDate(startDate, lastDayOfYear));
}

function

function generateDatabase() {
  const startDate = getStartDate();
  const endDate = getEndDate(startDate);
  console.log('start', startDate);
  console.log('end', endDate);
}

generateDatabase();
