import React from 'react';


const DaysOfWeek = () => {
  const DaysOfWeekArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  // Create List Element for each day of the week and store in a new array
  const DaysOfWeekListArr = DaysOfWeekArr.map((ele) => (
    <li className="day" style={{ width: '40px' }} key={ele}>
      <small>{ele}</small>
    </li>
  ));

  return (
    <div>
      <ul className="DaysOfWeek">
        {DaysOfWeekListArr}
      </ul>
    </div>
  );
};


export default DaysOfWeek;
