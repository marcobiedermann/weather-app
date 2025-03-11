import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import CityPreview from '.';

const meta: Meta<typeof CityPreview> = {
  component: CityPreview,
  args: {
    sys: {
      country: 'DE',
    },
    main: {
      temp: 18.54,
    },
    id: 2950159,
    name: 'Berlin',
  },
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
