import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Result from '.';

const meta: Meta<typeof Result> = {
  args: {
    id: 2950159,
    main: {
      temp: 18.54,
    },
    name: 'Berlin',
    onClick: fn(),
    sys: {
      country: 'DE',
    },
  },
  component: Result,
};

type Story = StoryObj<typeof Result>;

const Default: Story = {};

export { Default };
export default meta;
