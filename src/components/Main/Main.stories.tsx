import type { Meta, StoryObj } from '@storybook/react';
import Main from '.';

const meta: Meta<typeof Main> = {
  args: {
    children: 'Main',
  },
  component: Main,
};

type Story = StoryObj<typeof Main>;

const Default: Story = {};

export { Default };
export default meta;
