import { waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { server } from '../../../__mocks__/server';
import { render } from '../../../test/testing-library';
import { routes } from '../../../utils/routes';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Search page', () => {
  it('should render the title', async () => {
    const route = '/search?query=Berlin';
    const router = createMemoryRouter(routes, {
      initialEntries: [route],
    });
    render(<RouterProvider router={router} />);

    await waitFor(() => expect(document.title).toBe('Search'));
  });
});
