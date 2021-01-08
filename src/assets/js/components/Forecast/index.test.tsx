import { render } from '@testing-library/react';
import React from 'react';
import Forecast from '.';

describe('components/Forecast', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Forecast list={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
