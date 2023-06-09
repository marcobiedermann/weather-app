import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Navigation from '..';
import routes from '../__fixtures__';

describe('components/Navigation', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navigation routes={routes} />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render empty routes correctly', () => {
    const { asFragment } = render(<Navigation routes={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
