import React from 'react';
import { format } from 'date-fns';

const Header = ({ currMonth }) => {
  // Needed for date-fns module to display 'Month Year' format
  const displayFormat = 'MMMM yyyy';
  return (
    <div className="header">
      {/* display current month in desired format */}
      <strong>{format(currMonth, displayFormat)}</strong>
    </div>
  );
};

export default Header;
