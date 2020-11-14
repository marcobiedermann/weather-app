import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Cities from '.';
import citiesFixtures from './__fixtures__';

describe('components/Cities', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer
      .create(
        <MemoryRouter>
          <Cities cities={citiesFixtures} />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
