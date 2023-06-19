import { describe, expect, it } from 'vitest';
import Grid from '..';
import { render } from '../../../__test__/testing-library';

describe('components/Grid', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Grid>Content</Grid>);

    expect(asFragment()).toMatchSnapshot();
  });
});
