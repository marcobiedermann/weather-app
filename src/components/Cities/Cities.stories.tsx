import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import Cities from '.';

const meta: Meta<typeof Cities> = {
  args: {
    cities: [
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
  component: Cities,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof Cities>;

const Default: Story = {};

export { Default };
export default meta;
