import { render } from '@testing-library/react';
import React from 'react';
import Header from '..';

describe('components/Header', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Header>Content</Header>);

    expect(asFragment()).toMatchSnapshot();
  });
});
