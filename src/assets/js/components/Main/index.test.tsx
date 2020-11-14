import React from 'react';
import renderer from 'react-test-renderer';
import Main from '.';

describe('components/Main', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Main>Content</Main>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
