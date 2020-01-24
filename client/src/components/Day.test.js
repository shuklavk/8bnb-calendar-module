import React from 'react';
import ReactDOM from 'react-dom';
import Day from './Day.jsx'

test ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Day />, div);
});

// test('Button changes background color when clicked', () => {
//   const component = renderer.create(<Day />);

//   let button = component.toJSON();
//   expect(button).toMatchSnapShot();
// });
