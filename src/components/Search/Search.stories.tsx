import type { Meta, StoryObj } from '@storybook/react';
import Search from '.';

const meta: Meta<typeof Search> = {
  component: Search,
  args: {
    onSubmit: (data) => console.log(data),
  },
};

type Story = StoryObj<typeof Search>;

const Default: Story = {};

export { Default };
export default meta;
