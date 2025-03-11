import type { Meta, StoryObj } from '@storybook/react';
import Forecast from '.';

const meta: Meta<typeof Forecast> = {
  args: {
    list: [
      {
        dt: 1687100400,
        main: {
          temp: 25.34,
        },
        weather: [
          {
            description: 'scattered clouds',
            icon: '03d',
            id: 802,
          },
        ],
      },
    ],
  },
  component: Forecast,
};

type Story = StoryObj<typeof Forecast>;

const Default: Story = {};

export { Default };
export default meta;
