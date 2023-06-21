import type { Meta, StoryObj } from '@storybook/react';
import DailyForecast from '.';

const meta: Meta<typeof DailyForecast> = {
  component: DailyForecast,
  args: {
    list: [
      {
        dt: 1687086000,
        temp: {
          min: 13.87,
          max: 26.22,
        },
        weather: [
          {
            id: 800,
            description: 'sky is clear',
            icon: '01d',
          },
        ],
      },
    ],
  },
};

type Story = StoryObj<typeof DailyForecast>;

const Default: Story = {};

export { Default };
export default meta;
