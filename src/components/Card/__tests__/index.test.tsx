import { describe, expect, it } from 'vitest';
import Card from '..';
import { render } from '../../../__test__/testing-library';

describe('components/Card', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Card>Content</Card>);

    expect(asFragment()).toMatchSnapshot();
  });
});
