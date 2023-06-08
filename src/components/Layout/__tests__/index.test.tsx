import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Layout from '..';

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
