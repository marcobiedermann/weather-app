import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8',
      all: true,
      include: ['src'],
    },
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    environment: 'happy-dom',
  },
});
