import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import Loader from '..';

describe('components/Loader', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Loader />);

    expect(asFragment()).toMatchSnapshot();
  });
});
