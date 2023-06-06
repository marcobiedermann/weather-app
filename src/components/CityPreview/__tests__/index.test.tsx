import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import CityPreview from '..';
import cityFixtures from '../../City/__fixtures__';

describe('components/CityPreview', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <MemoryRouter>
        <CityPreview {...cityFixtures} />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
