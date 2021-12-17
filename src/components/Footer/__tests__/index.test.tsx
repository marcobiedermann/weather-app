import { render } from '@testing-library/react';
import React from 'react';
import Footer from '..';

describe('components/Footer', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Footer>Content</Footer>);

    expect(asFragment()).toMatchSnapshot();
  });
});
