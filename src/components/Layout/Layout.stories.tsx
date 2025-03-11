import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import Layout from '.';

const meta: Meta<typeof Layout> = {
  component: Layout,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Layout>;

const Default: Story = {};

export { Default };
export default meta;
