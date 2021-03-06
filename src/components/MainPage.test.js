import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MainPage from './MainPage';
import "../../setupTests";


let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchfield: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
});

it('should render main page', () => {
    expect(wrapper).toMatchSnapshot()
});

it('should filter robots', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [
            {
                id: 1,
                name: 'aaa',
                email: 'a@gmail.com'
            }
        ],
        searchField: 'x',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper.instance().filterRobots()).toEqual([]);
    expect(wrapper2.instance().filterRobots()).toEqual([]);
});
