import type { Meta, StoryObj } from '@storybook/react';
import Results from '.';

const meta: Meta<typeof Results> = {
  args: {
    results: [
      {
        id: 2950159,
        main: {
          temp: 18.54,
        },
        name: 'Berlin',
        sys: {
          country: 'DE',
        },
      },
    ],
  },
  component: Results,
};

type Story = StoryObj<typeof Results>;

const Default: Story = {};

export { Default };
export default meta;
