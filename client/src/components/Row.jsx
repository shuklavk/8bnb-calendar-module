import React from 'react';
import Day from './Day.jsx';

const Row = ({ dates }) => {
  const arrOfDayComponents = dates.map((ele) => <Day day={ele.day} id={ele.className} />);
  return (
    <tr>
      {arrOfDayComponents}
    </tr>
  );
};


export default Row;
