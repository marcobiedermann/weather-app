import { describe, expect, it } from 'vitest';
import Footer from '..';
import { render } from '../../../__test__/testing-library';

describe('components/Footer', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Footer>Content</Footer>);

    expect(asFragment()).toMatchSnapshot();
  });
});
