import type { Meta, StoryObj } from '@storybook/react';
import Forecast from '.';

const meta: Meta<typeof Forecast> = {
  component: Forecast,
  args: {
    list: [
      {
        dt: 1687100400,
        main: {
          temp: 25.34,
        },
        weather: [
          {
            id: 802,
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
      },
    ],
  },
};

type Story = StoryObj<typeof Forecast>;

const Default: Story = {};

export { Default };
export default meta;
