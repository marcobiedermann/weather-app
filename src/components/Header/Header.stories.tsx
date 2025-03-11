import type { Meta, StoryObj } from '@storybook/react';
import Header from '.';

const meta: Meta<typeof Header> = {
  args: {
    children: 'Header',
  },
  component: Header,
};

type Story = StoryObj<typeof Header>;

const Default: Story = {};

export { Default };
export default meta;
