import { render } from '@testing-library/react';
import React from 'react';
import Search from '..';

describe('components/Search', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Search initialValues={{ query: '' }} onSubmit={jest.fn()} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
