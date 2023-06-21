import type { Meta, StoryObj } from '@storybook/react';
import Cities from '.';

const meta: Meta<typeof Cities> = {
  component: Cities,
  args: {
    cities: [
      {
        sys: {
          country: 'DE',
        },
        main: {
          temp: 18.54,
        },
        id: 2950159,
        name: 'Berlin',
      },
    ],
  },
};

type Story = StoryObj<typeof Cities>;

const Default: Story = {};

export { Default };
export default meta;
