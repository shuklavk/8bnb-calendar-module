import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Calendar from '../client/src/components/Calendar.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Forward Button Component', () => {
  it('currMonth state should change after click of Forward Button', () => {
    const wrapper = shallow(<Calendar />);
    const currMonth = wrapper.state().currMonth;
    wrapper.find('ForwardButton').get(0).props.onForwardClick();
    const newMonth = wrapper.state().currMonth;
    expect(currMonth).not.toBe(newMonth);
  });
});
