import { describe, expect, it } from 'vitest';
import Label from '..';
import { render } from '../../../__test__/testing-library';

describe('components/Label', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Label htmlFor="foo">Content</Label>);

    expect(asFragment()).toMatchSnapshot();
  });
});
