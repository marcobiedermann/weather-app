import { describe, expect, it } from 'vitest';
import Layout from '..';
import { render } from '../../../__test__/testing-library';

describe('components/Layout', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Layout>Content</Layout>);

    expect(asFragment()).toMatchSnapshot();
  });
});
