import { render } from '@testing-library/react';
import React from 'react';
import Results from '..';
import resultsFixtures from '../__fixtures__';

describe('components/Results', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Results results={resultsFixtures} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
