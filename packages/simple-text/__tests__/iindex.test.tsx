import React from 'react';
import renderer from 'react-test-renderer';
import SimpleText from '../src/index';

test('0 should be 0', () => {
    const component = renderer.create(<SimpleText>'Text'</SimpleText>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();

    expect(0).toBe(0);
});
