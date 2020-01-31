import {
  startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, addDays, format,
} from 'date-fns';
import React from 'react';
import Row from './Row.jsx';

const Table = ({ currMonth }) => {
  // Function that gives array of all the dates in month and what classname
  // to give to each Day Component

  const createArrayOfDates = () => {
    // date format if you want just the day number
    const dateFormat = 'd';
    // exact day/time of the first of the month
    const monthStart = startOfMonth(currMonth);
    // exact day/time of the last day of the month
    const monthEnd = endOfMonth(currMonth);
    // the first date at the start of the first week of the month
    // For example: if January 1st was on a Tuesday, the 'firstDate' variable
    // would be Dec 30th on the previous Sunday. It is important to store the previous
    // month data to help with the lining of the dates (will clear the execess dates later)
    const firstDate = startOfWeek(monthStart);
    // the last date at the end of the last week of the month
    // For example: if January 31st was on a Thursday, the lastDate variable
    // would be Feburary 2nd which is the Saturday
    // Same reason as firstDate(above)
    const lastDate = endOfWeek(monthEnd);
    // Store every weeks data (exact date, className)
    // Data will be multiple arrays of length 7 which will
    // represent each week of the month
    const rows = [];
    // Container to hold 7 days of info
    // The info will be stored in a days array, then dumped into
    // the rows array. Then the days arrary will be emptied and used again
    let days = [];
    // currDay will act as our counter
    let currDay = firstDate;
    // keep going until currDay is past the lastDate
    while (currDay <= lastDate) {
      // We will look at one week at a time
      for (let i = 0; i < 7; i += 1) {
        const day = format(currDay, dateFormat);
        const className = isSameMonth(currDay, monthStart) ? 'enabled' : 'disabled';
        // Save an object with date and className
        // className is important because it will help us modify the disabled buttons
        days.push({ className, day });
        // increment the currDay counter by one day
        currDay = addDays(currDay, 1);
      }
      // Push the days arr into the rows arr and empty the days array to reuse for the next week
      rows.push(days);
      days = [];
    }
    return rows;
  };

  // Creates the info (date/classname) needed for all the weeks
  const rowInfoArr = createArrayOfDates();
  // Maps the info to Row Components
  const rowComponentArr = rowInfoArr.map((ele) => <Row dates={ele} key={ele[0].day} />);

  return (
    <div>
      {rowComponentArr}
    </div>
  );
};

export default Table;
