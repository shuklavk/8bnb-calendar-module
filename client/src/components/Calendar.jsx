import React from 'react';
import Row from './Row.jsx';
import DaysOfWeek from './DaysOfWeek.jsx';
import Header from './Header.jsx';
import { addMonths, subMonths } from 'date-fns';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      currMonth: new Date(), // RANDOM STATE TO AVOID ESLINT ERROR IGNORE FOR NOW
    });
  }

  render() {
    const { currMonth } = this.state;
    const nextMonth = addMonths(currMonth, 1);
    console.log(nextMonth);
    return (
      <div className="overallComponent" style={{ width: '632px' }}>
        <div className="calendarDiv">
          <Header currMonth={currMonth} />
          <DaysOfWeek />
          <Row />
        </div>

        <div className="calendarDiv">
          <Header currMonth={nextMonth} />
          <DaysOfWeek />
          <Row />
        </div>
      </div>
    );
  }
}


export default Calendar;
