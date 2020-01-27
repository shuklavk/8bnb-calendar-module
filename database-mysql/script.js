const db = require('./index.js');

// calculate random date, when given a start and end date
function randomDate(start, end) {
  const date = new Date(+start + Math.random() * (end - start));
  return date;
}

// Gets a random date between jan 1st 2020 - dec 31st 2020
function getStartDate() {
  const firstDayOfYear = new Date(2020, 0);
  const lastDayOfYear = new Date(2020, 11, 31);
  return (randomDate(firstDayOfYear, lastDayOfYear));
}

// Gets a random date between a given start date - dec 31st 2020
function getEndDate(startDate) {
  const lastDayOfYear = new Date(2020, 11, 31);
  return (randomDate(startDate, lastDayOfYear));
}

// Get a random minimum amount of days between 1 and 30
function getRandomMinDays() {
  return Math.floor(Math.random() * 30) + 1;
}

// Function to seed database
// Logic: get a random date and set it as the start date
// Then use that start date as a lower bound and get another random date (end date)
// Now you have randomly created both a start and end date
// Then calculate random amount of minimum days someone has to stay
// Use all these random values to create 100 queries, essentially seeding the database
// console logs either an err or success message
function generateAvailTable() {
  for (let i = 0; i < 100; i++) {
    const startDate = getStartDate();
    const endDate = getEndDate(startDate);
    const randomMinDays = getRandomMinDays();
    db.addToAvailTable(randomMinDays, startDate, endDate, (err, success) => {
      if (err) {
        console.log(err);
      } else {
        console.log(success);
      }
    });
  }
}

// calls the seeding function
generateAvailTable();

module.exports = {
  randomDate, getStartDate, getEndDate, getRandomMinDays,
};
