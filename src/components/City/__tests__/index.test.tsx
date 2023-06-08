import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import City from '..';
import cityFixtures from '../__fixtures__';

describe('components/City', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<City {...cityFixtures} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
