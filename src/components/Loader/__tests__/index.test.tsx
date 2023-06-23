import { composeStory } from '@storybook/react';
import { describe, expect, it } from 'vitest';
import { render } from '../../../test/testing-library';
import Meta, { Default } from '../Loader.stories';

describe('components/Loader', () => {
  it('renders correctly', () => {
    const ComposedDefault = composeStory(Default, Meta);
    const { asFragment } = render(<ComposedDefault />);

    expect(asFragment()).toMatchSnapshot();
  });
});
