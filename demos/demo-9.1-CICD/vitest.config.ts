import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig(async () => {
  const tsconfigPaths = await import('vite-tsconfig-paths').then(mod => mod.default);

  return {
    plugins: [tsconfigPaths(), react()],
    test: {
      environment: 'jsdom',
      setupFiles: './src/setup.ts',
      server: {
        deps: {
          inline: ['next']
        }
      }
    },
  };
});
