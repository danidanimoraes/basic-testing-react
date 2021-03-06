import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';
import "../../setupTests";

it('sould render card component with shallow', () => {
    expect(shallow(<Card />).length).toEqual(1)
})