import { composeStory } from '@storybook/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../../test/testing-library';
import Meta, { Default } from '../Layout.stories';

describe('components/Layout', () => {
  it('renders correctly', () => {
    const ComposedDefault = composeStory(Default, Meta);
    const { asFragment } = renderWithRouter(<ComposedDefault />);

    expect(asFragment()).toMatchSnapshot();
  });
});
