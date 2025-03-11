import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      all: true,
      exclude: ['**/__mocks__/*', '**/*.d.ts', 'test'],
      include: ['src'],
      provider: 'v8',
    },
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    environment: 'happy-dom',
  },
});
