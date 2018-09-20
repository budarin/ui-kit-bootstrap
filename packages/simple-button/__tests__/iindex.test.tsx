import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/index';

test('Кнопка должна содержать текст "Button""', () => {
    const tree = renderer.create(<Button text="Button" />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Кнопка должна содержать текст по-умолчанию', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
});
