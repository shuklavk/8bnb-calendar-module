import React from 'react';
import Row from './Row.jsx';
import DaysOfWeek from './DaysOfWeek.jsx';
import Header from './Header.jsx';
import BackButton from './BackButton.jsx';
import ForwardButton from './ForwardButton.jsx';
import { addMonths, subMonths } from 'date-fns';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      currMonth: new Date(),
    });
    this.onForwardClick = this.onForwardClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  // Everytime someone clicks the forward arrow key, the current month increases by one
  onForwardClick() {
    this.setState((prevState) => ({
      currMonth: addMonths(prevState.currMonth, 1),
    }));
  }

  // Everytime someone clicks the back arrow key, the current month decreases by one
  onBackClick() {
    this.setState((prevState) => ({
      currMonth: subMonths(prevState.currMonth, 1),
    }));
  }

  render() {
    const { currMonth } = this.state;
    const nextMonth = addMonths(currMonth, 1);
    return (
      <div className="overallComponent" style={{ width: '632px' }}>
        <div className="calendarDiv">
          <BackButton onBackClick={this.onBackClick} />
          <Header currMonth={currMonth} />
          <DaysOfWeek />
          <Row />
        </div>

        <div className="calendarDiv">
          <ForwardButton currMonth={currMonth} onForwardClick={this.onForwardClick} />
          <Header currMonth={nextMonth} />
          <DaysOfWeek />
          <Row />
        </div>
      </div>
    );
  }
}


export default Calendar;
