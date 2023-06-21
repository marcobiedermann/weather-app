import type { Meta, StoryObj } from '@storybook/react';
import Navigation from '.';

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  args: {
    routes: [
      {
        name: 'Home',
        path: '/',
      },
    ],
  },
};

type Story = StoryObj<typeof Navigation>;

const Default: Story = {};

export { Default };
export default meta;
