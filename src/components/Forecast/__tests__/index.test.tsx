import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Forecast from '..';

describe('components/Forecast', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Forecast list={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
