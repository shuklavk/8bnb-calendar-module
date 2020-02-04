import React from 'react';

// Class that creates a button for each day
class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  // Function that changes state whenever the props are changed
  static getDerivedStateFromProps(props, state) {
    const { id } = props;
    // If the passed id is 'clicked', make the date look like it has been
    // clicked
    if (id === 'clicked') {
      return {
        clicked: true,
      };
    }
    // If the passed id is not 'clicked' nor 'disabled', so pretty much
    // if the id is 'enabled' and the button is in its clicked state,
    // it will set clicked to false to display unclicked state
    if (id === 'enabled' && state.clicked === true) {
      return {
        clicked: false,
      };
    }

    // Return null if the state hasn't changed
    return null;
  }

  // Function to alternate between the 'clicked' state
  // Function gets run on every click to the button
  // Uses dateClick passed from Calendar Component
  // dateClick helps set the start and end dates for
  // the reservation
  onButtonClickHandler() {
    const { exactDate, dateClick, id } = this.props;
    dateClick(exactDate);
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
    this.changeClicked(id);
  }

  // Helper function that changes background of button when user's mouse enters button area
  // Also runs the hoveredDateFunction which gives Calendar component the hovered
  // date
  changeBackgroundEnteringButton(e) {
    const { hoveredDateFunction, exactDate, id } = this.props;
    hoveredDateFunction(exactDate);
    const { clicked } = this.state;
    if (!clicked) {
      e.target.style.background = 'rgb(204,238,235)';
    }
  }

  // changes state for button if the id is 'clicked'
  changeClicked(id) {
    if (id === 'clicked') {
      this.setState({
        clicked: true,
      });
    }
  }

  // Helper function that changes background of button when user's mouse exits button area
  changeBackgroundLeavingButton(e) {
    const { id } = this.props;
    const { clicked } = this.state;
    if (!clicked && id !== 'hovered') {
      e.target.style.background = 'rgb(237,246,246)';
    }
  }

  render() {
    const { clicked } = this.state;
    let { day, id } = this.props;

    // Alternating background color and text color on every click
    let buttonBackground = (clicked) ? 'rgb(0,132,137)' : 'rgb(237, 246, 246)';
    let buttonTextColor = (clicked) ? 'rgb(237, 246, 246)' : 'rgb(0, 132, 137)';
    // Buttons with the hovered id have special background and text colors
    if (id === 'hovered') {
      buttonBackground = 'rgb(204,238,235)';
      buttonTextColor = 'rgb(237,246,246)';
    }

    // if the id is disabled we want to override the day value to show nothing
    // the css is already handling the button being disabled, just need the text
    // to not show
    if (id === 'disabled') {
      day = '';
    }
    let style = {};
    // if the id is 'greyedOut' set it to the given style
    // if not then set it to the other style
    if (id === 'greyedOut') {
      style = {
        background: 'repeatingLinearGradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 3px, rgb(235, 235, 235) 3px, rgb(235, 235, 235) 4px)',
        backgroundImage: 'repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 3px, rgb(235, 235, 235) 3px, rgb(235, 235, 235) 4px)',
        color: 'rgb(216, 216, 216)',
        pointerEvents: 'none',
      };
    } else {
      style = {
        background: buttonBackground,
        color: buttonTextColor,
        cursor: 'pointer',
      };
    }
    return (
      <td className="tableElement">
        <button
          type="button"
          className="dateButton"
          // important to set to id since className attribute is already taken
          // Also the id css overtakes className css
          id={id}
          style={style}
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
