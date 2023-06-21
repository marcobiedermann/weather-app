import { composeStory } from '@storybook/react';
import { describe, expect, it } from 'vitest';
import { render } from '../../../__test__/testing-library';
import Meta, { Default } from '../Label.stories';

describe('components/Label', () => {
  it('renders correctly', () => {
    const ComposedDefault = composeStory(Default, Meta);
    const { asFragment } = render(<ComposedDefault />);

    expect(asFragment()).toMatchSnapshot();
  });
});
