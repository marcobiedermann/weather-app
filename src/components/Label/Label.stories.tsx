import type { Meta, StoryObj } from '@storybook/react';
import Label from '.';

const meta: Meta<typeof Label> = {
  args: {
    children: 'Label',
    htmlFor: 'username',
  },
  component: Label,
};

type Story = StoryObj<typeof Label>;

const Default: Story = {};

export { Default };
export default meta;
