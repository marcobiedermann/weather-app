import { describe, expect, it } from 'vitest';
import Navigation from '..';
import routes from '../__fixtures__';
import { render } from '../../../__test__/testing-library';

describe('components/Navigation', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Navigation routes={routes} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render empty routes correctly', () => {
    const { asFragment } = render(<Navigation routes={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
