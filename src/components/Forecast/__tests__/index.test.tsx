import { describe, expect, it } from 'vitest';
import Forecast from '..';
import { render } from '../../../__test__/testing-library';

describe('components/Forecast', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Forecast list={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
