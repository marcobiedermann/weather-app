import type { Meta, StoryObj } from '@storybook/react';
import Settings from '.';

const meta: Meta<typeof Settings> = {
  args: {},
  component: Settings,
};

type Story = StoryObj<typeof Settings>;

const Default: Story = {};

export { Default };
export default meta;
