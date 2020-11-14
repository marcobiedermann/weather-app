import React from 'react';
import renderer from 'react-test-renderer';
import Settings from '.';

describe('components/Settings', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer
      .create(<Settings initialValues={{ language: 'en', unit: 'metric' }} onSubmit={jest.fn()} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
