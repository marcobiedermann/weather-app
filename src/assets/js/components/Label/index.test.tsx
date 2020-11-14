import React from 'react';
import renderer from 'react-test-renderer';
import Label from '.';

describe('components/Label', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Label htmlFor="foo">Content</Label>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
