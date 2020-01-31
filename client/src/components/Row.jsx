import React from 'react';
import Day from './Day.jsx';

const Row = ({ dates }) => {
  // Each row component takes the info (date/className) and maps to each Day Component
  const arrOfDayComponents = dates.map((ele) => <Day day={ele.day} id={ele.className} />);
  return (
    <tr>
      {arrOfDayComponents}
    </tr>
  );
};


export default Row;
