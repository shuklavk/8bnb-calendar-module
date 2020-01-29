import React from 'react';
import Row from './Row.jsx';
import DaysOfWeek from './DaysOfWeek.jsx';
import Header from './Header.jsx'


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      currMonth: new Date(), // RANDOM STATE TO AVOID ESLINT ERROR IGNORE FOR NOW
    });
  }

  render() {
    const { currMonth } = this.state;
    return (
      <div className="calendarDiv">
        <Header currMonth={currMonth} />
        <DaysOfWeek />
        <Row />
      </div>
    );
  }
}


export default Calendar;
