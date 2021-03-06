import { render } from '@testing-library/react';
import React from 'react';
import Main from '..';

describe('components/Main', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Main>Content</Main>);

    expect(asFragment()).toMatchSnapshot();
  });
});
