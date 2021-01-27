import { render } from '@testing-library/react';
import React from 'react';
import City from '..';
import cityFixtures from '../__fixtures__';

describe('components/City', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<City {...cityFixtures} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
