import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Search from '.';

const meta: Meta<typeof Search> = {
  component: Search,
  args: {
    onSubmit: fn(),
  },
};

type Story = StoryObj<typeof Search>;

const Default: Story = {};

export { Default };
export default meta;
