import React from 'react';
import renderer from 'react-test-renderer';
import Header from '.';

describe('components/Header', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Header>Content</Header>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
