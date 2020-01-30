import React from 'react';
import {
  addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek
} from 'date-fns';
import Table from './Table.jsx';
import DaysOfWeek from './DaysOfWeek.jsx';
import Header from './Header.jsx';
import BackButton from './BackButton.jsx';
import ForwardButton from './ForwardButton.jsx';


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
          <Table currMonth={currMonth} />
        </div>

        <div className="calendarDiv">
          <ForwardButton onForwardClick={this.onForwardClick} />
          <Header currMonth={nextMonth} />
          <DaysOfWeek />
          <Table currMonth={nextMonth} />
        </div>
      </div>
    );
  }
}


export default Calendar;
