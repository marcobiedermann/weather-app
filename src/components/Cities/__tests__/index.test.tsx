import { describe, expect, it } from 'vitest';
import Cities from '..';
import { render } from '../../../__test__/testing-library';
import cities from '../__fixtures__';

describe('components/Cities', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Cities cities={cities} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render empty cities correctly', () => {
    const { asFragment } = render(<Cities cities={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
