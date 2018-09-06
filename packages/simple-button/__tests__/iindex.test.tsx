import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/index';

test('Test Button component', () => {
    const tree = renderer.create(<Button text="Button" />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(0).toBe(0);
});
