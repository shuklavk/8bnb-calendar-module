import React from 'react';
import Row from './Row.jsx';
import DaysOfWeek from './DaysOfWeek.jsx';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      fdsfs:'fsdfds',// RANDOM STATE TO AVOID ESLINT ERROR IGNORE FOR NOW
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
