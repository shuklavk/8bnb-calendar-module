import React from 'react';
import {
  addMonths, subMonths, subDays,
} from 'date-fns';
import $ from 'jquery';
import Table from './Table.jsx';
import DaysOfWeek from './DaysOfWeek.jsx';
import Header from './Header.jsx';
import BackButton from './BackButton.jsx';
import ForwardButton from './ForwardButton.jsx';
import './Calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      currMonth: new Date(),
      hoveredDate: '', // Date at which cursor is on after the start date has been selected
      clickedStartDate: '', // selected start date for reservation
      clickedEndDate: '', // selected end date for reservation
      reservedDates: [],
      pageIdNumber: 0, // update page id number when going to another page
      // (page 0 has no reservations)
    });
    this.onForwardClick = this.onForwardClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
    this.dateClick = this.dateClick.bind(this);
    this.changeHoveredDate = this.changeHoveredDate.bind(this);
  }

  // Set up in a way that all reserved dates for each location will
  // be stored in an array, but my database only spits a single start and
  // end date per reservation
  componentDidMount() {
    const { pageIdNumber } = this.state;
    ($.ajax({
      url: '/data/' + pageIdNumber,
      type: 'GET',
      success: (data) => {
        const reservedDays = [data.startDate, data.endDate];
        this.setState((prevState) => ({
          reservedDates: [...prevState.reservedDates, reservedDays],
        }));
      },
    }));
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

  // Everytime cursor moves to a new date, the states the hovered date
  changeHoveredDate(date) {
    this.setState({
      hoveredDate: date,
    });
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
    // Else if the clicked date is past the reservation's end date,
    // set the end date to the clicked date if start and end date aren't same
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
        clickedEndDate: date,
      });
    } else if (date > clickedEndDate) {
      if (JSON.stringify(clickedStartDate) !== JSON.stringify(clickedEndDate)) {

        this.setState({
          clickedStartDate: date,
          clickedEndDate: date,
        });
      } else {
        this.setState({
          clickedEndDate: date,
        });
      }
    } else {
      this.setState({
        clickedEndDate: date,
      });
    }
  }

  render() {
    const {
      currMonth, clickedStartDate, clickedEndDate, hoveredDate, reservedDates,
    } = this.state;
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
            hoveredDateFunction={this.changeHoveredDate}
            hoveredDate={hoveredDate}
            yesterday={subDays((new Date()), 1)}
            reservedDates={reservedDates}
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
            hoveredDateFunction={this.changeHoveredDate}
            hoveredDate={hoveredDate}
            yesterday={subDays((new Date()), 1)}
            reservedDates={reservedDates}
          />
        </div>
      </div>
    );
  }
}


export default Calendar;
