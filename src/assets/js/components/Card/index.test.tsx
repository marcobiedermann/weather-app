import React from 'react';
import renderer from 'react-test-renderer';
import Card from '.';

describe('components/Card', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Card>Content</Card>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
