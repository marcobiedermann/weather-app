import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import CityPreview from '.';

const meta: Meta<typeof CityPreview> = {
  args: {
    id: 2950159,
    main: {
      temp: 18.54,
    },
    name: 'Berlin',
    sys: {
      country: 'DE',
    },
  },
  component: CityPreview,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof CityPreview>;

const Default: Story = {};

export { Default };
export default meta;
