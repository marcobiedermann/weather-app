import { render } from '@testing-library/react';
import React from 'react';
import Navigation from '..';

describe('components/Navigation', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Navigation routes={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
