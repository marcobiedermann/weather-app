import type { Meta, StoryObj } from '@storybook/react';
import Seo from '.';

const meta: Meta<typeof Seo> = {
  args: {
    title: 'Weather App',
  },
  component: Seo,
};

type Story = StoryObj<typeof Seo>;

const Default: Story = {};

export { Default };
export default meta;
