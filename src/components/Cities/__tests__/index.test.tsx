import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Cities from '..';
import citiesFixtures from '../__fixtures__';

describe('components/Cities', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <MemoryRouter>
        <Cities cities={citiesFixtures} />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
