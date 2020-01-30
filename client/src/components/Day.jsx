import React from 'react';

// Class that creates a button for each day
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

  // Helper function that changes background of button when user's mouse enters button area
  changeBackgroundEnteringButton(e) {
    const { clicked } = this.state;
    if (!clicked) {
      e.target.style.background = 'rgb(204,238,235)';
    }
  }

  // Helper function that changes background of button when user's mouse exits button area
  changeBackgroundLeavingButton(e) {
    const { clicked } = this.state;
    if (!clicked) {
      e.target.style.background = 'rgb(237,246,246)';
    }
  }

  render() {
    const { clicked } = this.state;

    // Alternating background color and text color on every click
    const buttonBackground = (clicked) ? 'rgb(0,132,137)' : 'rgb(237, 246, 246)';
    const buttonTextColor = (clicked) ? 'rgb(237, 246, 246)' : 'rgb(0, 132, 137)';

    let { day, id } = this.props;

    // if the id is disabled we want to override the day value to show nothing
    // the css is already handling the button being disabled, just need the text
    // to not show
    if (id === 'disabled') {
      day = '';
    }
    return (
      <td className="tableElement">
        <button
          type="button"
          className="dateButton"
          // important to set to id since className attribute is already taken
          // Also the id css overtakes className css
          id={id}
          style={{
            background: buttonBackground,
            color: buttonTextColor,
          }}
          onClick={() => { this.onButtonClickHandler(); }}
          onMouseEnter={(e) => { this.changeBackgroundEnteringButton(e); }}
          onMouseLeave={(e) => { this.changeBackgroundLeavingButton(e); }}
        >
          {day}
        </button>
      </td>
    );
  }
}


export default Day;
