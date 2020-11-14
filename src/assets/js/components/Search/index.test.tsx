import React from 'react';
import renderer from 'react-test-renderer';
import Search from '.';

describe('components/Search', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer
      .create(<Search initialValues={{ query: '' }} onSubmit={jest.fn()} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
