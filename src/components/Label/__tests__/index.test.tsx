import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Label from '..';

describe('components/Label', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Label htmlFor="foo">Content</Label>);

    expect(asFragment()).toMatchSnapshot();
  });
});
