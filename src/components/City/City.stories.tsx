import type { Meta, StoryObj } from '@storybook/react';
import City from '.';

const meta: Meta<typeof City> = {
  args: {
    main: {
      temp: 25.98,
      temp_max: 28.88,
      temp_min: 22.77,
    },
    name: 'Berlin',
    weather: [
      {
        description: 'clear sky',
        icon: '01d',
        id: 800,
      },
    ],
  },
  component: City,
};

type Story = StoryObj<typeof City>;

const Default: Story = {};

export { Default };
export default meta;
