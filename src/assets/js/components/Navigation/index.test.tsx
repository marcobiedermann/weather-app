import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '.';

describe('components/Navigation', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Navigation routes={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
