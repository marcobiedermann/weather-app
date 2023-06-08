import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Grid from '..';

describe('components/Grid', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Grid>Content</Grid>);

    expect(asFragment()).toMatchSnapshot();
  });
});
