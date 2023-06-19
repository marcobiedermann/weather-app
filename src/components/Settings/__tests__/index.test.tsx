import { describe, expect, it, vi } from 'vitest';
import Settings from '..';
import { render } from '../../../__test__/testing-library';

describe('components/Settings', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <Settings
        defaultValues={{
          language: 'en',
          unit: 'metric',
        }}
        onSubmit={vi.fn()}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
