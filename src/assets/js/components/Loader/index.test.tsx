import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '.';

describe('components/Loader', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Loader />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
