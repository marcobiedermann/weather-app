import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Search from '..';

describe('components/Search', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Search defaultValues={{ query: '' }} onSubmit={vi.fn()} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
