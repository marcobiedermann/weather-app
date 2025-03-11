import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8',
      all: true,
      include: ['src'],
      exclude: ['**/__mocks__/*', '**/*.d.ts', 'test'],
    },
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    environment: 'happy-dom',
  },
});
