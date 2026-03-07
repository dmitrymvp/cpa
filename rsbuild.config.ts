import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'cpa',
  },
  resolve: {
    alias: {
      '@assets': './src/assets',
      '@app': './src/app',
      '@pages': './src/pages',
      '@features': './src/features',
      '@widgets': './src/widgets',
      '@entities': './src/entities',
      '@shared': './src/shared',
      '@hooks': './src/shared/hooks',
    },
  },
});
