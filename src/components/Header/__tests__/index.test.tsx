import { describe, expect, it } from 'vitest';
import Header from '..';
import { render } from '../../../__test__/testing-library';

describe('components/Header', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Header>Content</Header>);

    expect(asFragment()).toMatchSnapshot();
  });
});
