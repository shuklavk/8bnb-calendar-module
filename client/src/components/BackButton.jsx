import React from 'react';

const BackButton = ({ onBackClick }) => {
  return (
    <div
      role="button"
      aria-label="Move backward to switch to the previous month."
      tabIndex="0"
      className="backCalendarButton"
      onClick = {() => {onBackClick()}}
    >
      <svg
        focusable="false"
        viewBox="0 0 1000 1000"
        className="backArrow"
      >
        <path
          d="M336 275L126 485h806c13 0 23 10 23 23s-10 23-23 23H126l210 210c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7L55 524c-11-11-11-21 0-32l249-249c21-22 53 10 32 32z"
        />
      </svg>
    </div>
  );
};

export default BackButton;
