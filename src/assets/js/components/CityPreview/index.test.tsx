import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CityPreview from '.';
import cityFixtures from '../City/__fixtures__';

describe('components/CityPreview', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer
      .create(
        <MemoryRouter>
          <CityPreview {...cityFixtures} />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
