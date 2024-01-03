import { defineConfig } from 'vite';

export default defineConfig({
  base:
    process.env.NODE_ENV === 'production'
      ? '/ch-simple-homepage-alarado/'
      : './',
  server: {
    open: true,
  },
});
