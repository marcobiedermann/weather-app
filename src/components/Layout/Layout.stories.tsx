import type { Meta, StoryObj } from '@storybook/react';
import Layout from '.';

const meta: Meta<typeof Layout> = {
  component: Layout,
  args: {
    children: 'Content',
  },
};

type Story = StoryObj<typeof Layout>;

const Default: Story = {};

export { Default };
export default meta;
