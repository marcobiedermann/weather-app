import type { Meta, StoryObj } from '@storybook/react';
import DailyForecast from '.';

const meta: Meta<typeof DailyForecast> = {
  args: {
    list: [
      {
        dt: 1687086000,
        temp: {
          max: 26.22,
          min: 13.87,
        },
        weather: [
          {
            description: 'sky is clear',
            icon: '01d',
            id: 800,
          },
        ],
      },
    ],
  },
  component: DailyForecast,
};

type Story = StoryObj<typeof DailyForecast>;

const Default: Story = {};

export { Default };
export default meta;
