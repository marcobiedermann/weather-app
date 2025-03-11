import type { Meta, StoryObj } from '@storybook/react';
import Footer from '.';

const meta: Meta<typeof Footer> = {
  args: {
    children: 'Footer',
  },
  component: Footer,
};

type Story = StoryObj<typeof Footer>;

const Default: Story = {};

export { Default };
export default meta;
