import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import Navigation from '.';

const meta: Meta<typeof Navigation> = {
  args: {
    routes: [
      {
        name: 'Home',
        path: '/',
      },
    ],
  },
  component: Navigation,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Navigation>;

const Default: Story = {};

export { Default };
export default meta;
