import { describe, expect, it, vi } from 'vitest';
import Search from '..';
import { render } from '../../../__test__/testing-library';

describe('components/Search', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Search onSubmit={vi.fn()} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
