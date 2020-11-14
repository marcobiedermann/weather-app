import React from 'react';
import renderer from 'react-test-renderer';
import Forecast from '.';

describe('components/Forecast', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Forecast list={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
