import React from 'react';

const ForwardButton = ({ onForwardClick }) => {
  return (
    <div
      role="button"
      aria-label="Move forward to switch to the next month."
      tabIndex="0"
      className="forwardCalendarButton"
      onClick={() => onForwardClick()}
    >
      <svg
        focusable="false"
        viewBox="0 0 1000 1000"
        className="frontArrow"
      >
        <path
          d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"
        />
      </svg>
    </div>
  );
};

export default ForwardButton;
