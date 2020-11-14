import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '.';

describe('components/Footer', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Footer>Content</Footer>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
