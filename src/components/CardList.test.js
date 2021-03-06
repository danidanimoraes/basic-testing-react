import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';
import "../../setupTests";


it('should shallow match snapshot CardList', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John',
            username: 'johnjohn',
            email: 'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
});