import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CounterButton from './CounterButton';
import "../../setupTests";


it('should shallow match snapshot Counterbutton', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot()
});

it('should increment the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    expect(wrapper.state()).toEqual({ count: 1 });
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
    expect(wrapper.props().color).toEqual(mockColor);
});