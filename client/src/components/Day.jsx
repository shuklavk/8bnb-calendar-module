import React from 'react';


class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  // Function to alternate between the 'clicked' state
  // Function gets run on every click to the button
  onButtonClickHandler() {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  }

  render() {
    const { clicked } = this.state;

    // Alternating background color and text color on every click
    const buttonBackground = (clicked) ? 'rgb(0,132,137)' : 'rgb(237, 246, 246)';
    const buttonTextColor = (clicked) ? 'rgb(237, 246, 246)' : 'rgb(0, 132, 137)';
    return (
      <div>
        <button
          type="button"
          className="dateButton"
          style={{
            background: buttonBackground,
            color: buttonTextColor,
          }}
          onClick={() => { this.onButtonClickHandler(); }}
        >
          12
        </button>
      </div>
    );
  }
}


export default Day;
