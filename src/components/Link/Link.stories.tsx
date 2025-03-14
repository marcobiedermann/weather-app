import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import Link from '.';

const meta: Meta<typeof Link> = {
  args: {
    children: 'Link',
    to: '/',
  },
  component: Link,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Link>;

const Default: Story = {};

export { Default };
export default meta;
