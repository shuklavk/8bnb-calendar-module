import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Day from '../client/src/components/Day.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Day Component', () => {
  it('Calendar date should be greater than or equal to 1', () => {
    const wrapper = shallow(<Day day={12} className= {'enabled'}/>);
    const text = wrapper.find('td button');
    expect(parseInt(text.text())).toBeGreaterThanOrEqual(1);
  });

  it('Calendar date should be less than or equal to 31', () => {
    const wrapper = shallow(<Day day={12} className= {'enabled'}/>);
    const text = wrapper.find('td button');
    expect(parseInt(text.text())).toBeLessThanOrEqual(31);
  });

  it('Calendar date should start off with this specific background color: rgb (237,246,246)', () => {
    const wrapper = shallow(<Day day={12} className= {'enabled'}/>);
    const button = wrapper.find('button');
    expect(button.get(0).props.style.background).toBe('rgb(237, 246, 246)');
  });

  it('Calendar date should change background color to: rgb(0, 132, 137) after being clicked', () => {
    const wrapper = shallow(<Day day={12} className= {'enabled'}/>);
    const button = wrapper.find('.dateButton');
    button.simulate('click');
    const clickedButton = wrapper.find('.dateButton');
    expect(clickedButton.get(0).props.style.background).toBe('rgb(0,132,137)');
  });


  it('Calendar date should start off with this specific button text color: rgb (0, 132, 137)', () => {
    const wrapper = shallow(<Day day={12} className= {'enabled'}/>);
    const button = wrapper.find('button');
    expect(button.get(0).props.style.color).toBe('rgb(0, 132, 137)');
  });

  it('Calendar date should change button text color to: rgb(237, 246, 246) after being clicked', () => {
    const wrapper = shallow(<Day day={12} className= {'enabled'}/>);
    const button = wrapper.find('button');
    button.simulate('click');
    const newButton = wrapper.find('button');
    expect(button.get(0).props.style.background).toBe('rgb(237, 246, 246)');
  });
});
