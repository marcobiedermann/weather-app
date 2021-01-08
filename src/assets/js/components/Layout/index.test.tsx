import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '.';

describe('components/Layout', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <MemoryRouter>
        <Layout>Content</Layout>
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
