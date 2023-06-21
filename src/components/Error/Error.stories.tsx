import type { Meta, StoryObj } from '@storybook/react';
import Error from '.';

const meta: Meta<typeof Error> = {
  component: Error,
  args: {
    message: 'Error message',
  },
};

type Story = StoryObj<typeof Error>;

const Default: Story = {};

export { Default };
export default meta;
