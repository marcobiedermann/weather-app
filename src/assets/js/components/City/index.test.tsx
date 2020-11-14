import React from 'react';
import renderer from 'react-test-renderer';
import City from '.';
import cityFixtures from './__fixtures__';

describe('components/City', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<City {...cityFixtures} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
