import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Link from '.';

const meta: Meta<typeof Link> = {
  component: Link,
  args: {
    children: 'Link',
    to: '/',
  },
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
