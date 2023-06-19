import { describe, expect, it } from 'vitest';
import City from '..';
import { render } from '../../../__test__/testing-library';
import cityFixtures from '../__fixtures__';

describe('components/City', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<City {...cityFixtures} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
