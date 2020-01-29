import React from 'react';
import Row from './Row.jsx';
import DaysOfWeek from './DaysOfWeek.jsx';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      fdsfs:"fsdfds",
    });
  }

  render() {
    return (
      <div>
        <DaysOfWeek />
        <Row />
      </div>
    );
  }
}


export default Calendar;
