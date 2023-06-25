import type { Meta, StoryObj } from '@storybook/react';
import Link from '.';

const meta: Meta<typeof Link> = {
  component: Link,
  args: {
    children: 'Link',
    to: '/',
  },
};

type Story = StoryObj<typeof Link>;

const Default: Story = {};

export { Default };
export default meta;
