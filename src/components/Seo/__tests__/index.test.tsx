import { composeStory } from '@storybook/react';
import { waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { render } from '../../../test/testing-library';
import Meta, { Default } from '../Seo.stories';

describe('components/Seo', () => {
  it('renders correctly', async () => {
    const ComposedDefault = composeStory(Default, Meta);

    render(<ComposedDefault />);

    await waitFor(() => expect(document.title).toStrictEqual('Weather App'));
  });
});
