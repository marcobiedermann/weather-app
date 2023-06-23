import type { Meta, StoryObj } from '@storybook/react';
import Results from '.';

const meta: Meta<typeof Results> = {
  component: Results,
  args: {
    results: [
      {
        id: 2950159,
        name: 'Berlin',
        main: {
          temp: 18.54,
        },
        sys: {
          country: 'DE',
        },
      },
    ],
  },
};

type Story = StoryObj<typeof Results>;

const Default: Story = {};

export { Default };
export default meta;
