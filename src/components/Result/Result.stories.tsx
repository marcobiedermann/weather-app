import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Result from '.';

const meta: Meta<typeof Result> = {
  component: Result,
  args: {
    id: 2950159,
    name: 'Berlin',
    main: {
      temp: 18.54,
    },
    sys: {
      country: 'DE',
    },
    onClick: fn(),
  },
};

type Story = StoryObj<typeof Result>;

const Default: Story = {};

export { Default };
export default meta;
