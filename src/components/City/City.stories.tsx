import type { Meta, StoryObj } from '@storybook/react';
import City from '.';

const meta: Meta<typeof City> = {
  component: City,
  args: {
    weather: [
      {
        id: 800,
        description: 'clear sky',
        icon: '01d',
      },
    ],
    main: {
      temp: 25.98,
      temp_min: 22.77,
      temp_max: 28.88,
    },
    name: 'Berlin',
  },
};

type Story = StoryObj<typeof City>;

const Default: Story = {};

export { Default };
export default meta;
