import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Cities from '..';
import cities from '../__fixtures__';

describe('components/Cities', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Cities cities={cities} />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render empty cities correctly', () => {
    const { asFragment } = render(<Cities cities={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
