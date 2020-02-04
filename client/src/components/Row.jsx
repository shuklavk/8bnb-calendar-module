import React from 'react';
import Day from './Day.jsx';

const Row = ({ dates, dateClick, hoveredDateFunction }) => {
  // Each row component takes the info (date, className, etc) and maps to each Day Component
  const arrOfDayComponents = dates.map((ele) => (
    <Day
      day={ele.day}
      id={ele.className}
      exactDate={ele.exactDate}
      key={ele.day}
      dateClick={dateClick}
      hoveredDateFunction={hoveredDateFunction}
    />
  ));
  return (
    <tr>
      {arrOfDayComponents}
    </tr>
  );
};


export default Row;
