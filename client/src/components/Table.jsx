import {
  startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, addDays, format,
} from 'date-fns';
import React from 'react';
import Row from './Row.jsx';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomState: 'dsfsdf',
    };
  }

  createArrayOfDates() {
    const dateFormat = 'd';
    const { currMonth } = this.props;
    const monthStart = startOfMonth(currMonth);
    const monthEnd = endOfMonth(currMonth);
    const firstDate = startOfWeek(monthStart);
    const lastDate = endOfWeek(monthEnd);
    const rows = [];
    let days = [];
    let currDay = firstDate;
    while (currDay <= lastDate) {
      for (let i = 0; i < 7; i += 1) {
        const day = format(currDay, dateFormat);
        const className = isSameMonth(currDay, monthStart) ? 'enabled' : 'disabled';
        days.push({ className, day });
        currDay = addDays(currDay, 1);
      }
      rows.push(days);
      days = [];
    }
    return rows;
  }

  render() {
    const rowInfoArr = this.createArrayOfDates();
    const rowComponentArr = rowInfoArr.map((ele) => <Row dates={ele} key={ele[0].day} />);
    return (
      <div>
        {rowComponentArr}
      </div>
    );
  }
}
export default Table;
