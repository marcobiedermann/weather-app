import { describe, expect, it } from 'vitest';
import Main from '..';
import { render } from '../../../__test__/testing-library';

describe('components/Main', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Main>Content</Main>);

    expect(asFragment()).toMatchSnapshot();
  });
});
