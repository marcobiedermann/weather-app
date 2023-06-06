import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import Settings from '..';

describe('components/Settings', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <Settings defaultValues={{ language: 'en', unit: 'metric' }} onSubmit={vi.fn()} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
