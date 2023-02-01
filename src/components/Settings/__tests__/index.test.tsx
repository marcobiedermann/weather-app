import { render } from '@testing-library/react';
import React from 'react';
import Settings from '..';

describe('components/Settings', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <Settings defaultValues={{ language: 'en', unit: 'metric' }} onSubmit={jest.fn()} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
