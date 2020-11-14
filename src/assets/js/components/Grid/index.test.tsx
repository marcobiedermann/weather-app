import React from 'react';
import renderer from 'react-test-renderer';
import Grid from '.';

describe('components/Grid', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Grid>Content</Grid>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
