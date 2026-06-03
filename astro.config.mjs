import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = '', repo = ''] = repository.split('/');
const isUserSite = repo.endsWith('.github.io');
const base = repo && !isUserSite ? `/${repo}/` : '/';
const site =
  owner && repo ? `https://${owner}.github.io${isUserSite ? '/' : base}` : 'http://localhost:4321';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  devToolbar: {
    enabled: false,
  },
  redirects: {
    '/studio': '/about',
  },
  integrations: [mdx(), sitemap()],
});
