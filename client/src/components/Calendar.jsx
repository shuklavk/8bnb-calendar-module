import React from 'react';
import {
  addMonths, subMonths,
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
      clickedStartDate: '', // selected start date for reservation
      clickedEndDate: '', // selected end date for reservation
    });
    this.onForwardClick = this.onForwardClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
    this.dateClick = this.dateClick.bind(this);
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

  // Everytime a date is clicked, it updates the reservation's start and end date
  dateClick(date) {
    const { clickedStartDate, clickedEndDate } = this.state;
    // If the start date hasn't been set yet, make the start and end
    // the clicked date
    // Else if you click on the start date again, it resets the end
    // date, making it the same as the start date
    // Else if you click on the end date again, it resets the start
    // date, making it the same as the end date
    // Else if the clicked date is before the start date, set the start
    // date to the new clicked date
    // Finally if the clicked date is past the reservation's end date,
    // set the end date to the clicked date
    if (clickedStartDate === '') {
      this.setState({
        clickedStartDate: date,
        clickedEndDate: date,
      });
    } else if (JSON.stringify(date) === JSON.stringify(clickedStartDate)) {
      this.setState({
        clickedEndDate: date,
      });
    } else if (JSON.stringify(date) === JSON.stringify(clickedEndDate)) {
      this.setState({
        clickedEndDate: date,
        clickedStartDate: date,
      });
    } else if (date < clickedStartDate) {
      this.setState({
        clickedStartDate: date,
      });
    } else {
      this.setState({
        clickedEndDate: date,
      });
    }
  }

  render() {
    const { currMonth, clickedStartDate, clickedEndDate } = this.state;
    const nextMonth = addMonths(currMonth, 1);
    return (
      <div className="overallComponent" style={{ width: '632px' }}>
        <div className="calendarDiv">
          <BackButton onBackClick={this.onBackClick} />
          <Header currMonth={currMonth} />
          <DaysOfWeek />
          <Table
            currMonth={currMonth}
            dateClick={this.dateClick}
            clickedEndDate={clickedEndDate}
            clickedStartDate={clickedStartDate}
          />
        </div>

        <div className="calendarDiv">
          <ForwardButton onForwardClick={this.onForwardClick} />
          <Header currMonth={nextMonth} />
          <DaysOfWeek />
          <Table
            currMonth={nextMonth}
            dateClick={this.dateClick}
            clickedEndDate={clickedEndDate}
            clickedStartDate={clickedStartDate}
          />
        </div>
      </div>
    );
  }
}


export default Calendar;
