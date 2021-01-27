import { render } from '@testing-library/react';
import React from 'react';
import Loader from '..';

describe('components/Loader', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Loader />);

    expect(asFragment()).toMatchSnapshot();
  });
});
