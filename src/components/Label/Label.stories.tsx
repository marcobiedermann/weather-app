import type { Meta, StoryObj } from '@storybook/react';
import Label from '.';

const meta: Meta<typeof Label> = {
  component: Label,
  args: {
    children: 'Label',
    htmlFor: 'username',
  },
};

type Story = StoryObj<typeof Label>;

const Default: Story = {};

export { Default };
export default meta;
