import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/index';

console.log('__BROWSER__', process.env.__BROWSER__);

test('Кнопка должна содержать текст "Button""', () => {
    const tree = renderer.create(<Button text="Button" />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Кнопка должна содержать текст по-умолчанию', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
});
