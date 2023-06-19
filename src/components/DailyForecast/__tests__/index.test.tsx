import { describe, expect, it } from 'vitest';
import DailyForecast from '..';
import { render } from '../../../__test__/testing-library';

describe('components/DailyForecast', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<DailyForecast list={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
