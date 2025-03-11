import type { Preview } from '@storybook/react';
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import Loader from '../src/components/Loader';
import i18n from '../src/i18n';
import '../src/style.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

function withI18next(Story) {
  return (
    <Suspense fallback={<Loader />}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
}

const decorators = [withI18next];

export default preview;
export { decorators };
