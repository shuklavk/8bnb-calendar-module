const mysql = require('mysql');

// Creates mysql connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootpass',
  database: 'calendar',
});

// connects database to server
connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

// Helper function to add data to availabilityDays table
const addToAvailTable = (minDays, startDate, endDate, callback) => {
  connection.query(`INSERT INTO availabilityDays (startDate, endDate, minDaysStay) VALUES(?, ?, ?)`, [startDate, endDate, minDays], (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

// Exporting helper function
module.exports = { addToAvailTable };
