import { defineConfig } from 'astro/config';
import rehypeRaw from 'rehype-raw';

export default defineConfig({
  site: 'https://www.growcloudskills.com',
  markdown: {
    allowDangerousHtml: true,
    rehypePlugins: [rehypeRaw],
    shikiConfig: { theme: 'dark-plus', wrap: true },
  },
  build: { format: 'directory', inlineStylesheets: 'always' },
});
