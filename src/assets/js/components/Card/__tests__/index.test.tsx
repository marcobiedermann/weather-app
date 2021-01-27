import { render } from '@testing-library/react';
import React from 'react';
import Card from '..';

describe('components/Card', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Card>Content</Card>);

    expect(asFragment()).toMatchSnapshot();
  });
});
