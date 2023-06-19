import { describe, expect, it } from 'vitest';
import Loader from '..';
import { render } from '../../../__test__/testing-library';

describe('components/Loader', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Loader />);

    expect(asFragment()).toMatchSnapshot();
  });
});
