import React from 'react';


class DaysOfWeek extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      fdsfs: "fsdfds",
    });
  }

  render() {
    const DaysOfWeekArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
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
  }
}


export default DaysOfWeek;
