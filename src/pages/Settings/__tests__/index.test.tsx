import { waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import { render } from '../../../test/testing-library';
import { routes } from '../../../utils/routes';

describe('Settings page', () => {
  it('should render the title', async () => {
    const route = '/settings';
    const router = createMemoryRouter(routes, {
      initialEntries: [route],
    });
    render(<RouterProvider router={router} />);

    await waitFor(() => expect(document.title).toBe('Settings'));
  });
});
