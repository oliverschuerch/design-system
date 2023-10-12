import type { StorybookConfig } from '@storybook/web-components-vite';
import pkg from '../package.json';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  logLevel: 'info',
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: false,
        highlight: false,
        outline: false,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-designs',
    '@storybook/addon-a11y',
    '@geometricpanda/storybook-addon-badges',
    '@pxtrn/storybook-addon-docs-stencil',
  ],
  staticDirs: [
    {
      from: '../public/assets',
      to: '/assets',
    },
    '../public',
    '../node_modules/@swisspost/design-system-icons/public',
  ],
  docs: {
    autodocs: 'tag',
  },
  env: config => ({
    ...config,
    STORYBOOK_GTM_KEY: 'GTM-WKSKHGJ',
    STORYBOOK_GTM_PAGE_CONTEXT_CONTENT_LANGUAGE: 'en',
    STORYBOOK_GTM_PAGE_CONTEXT_CONTENT_GEO_REGION: 'national',
    STORYBOOK_GTM_PAGE_CONTEXT_SOURCE_CODE_VERSION: pkg.version,
    STORYBOOK_GTM_PAGE_CONTEXT_ENVIRONMENT_DEV: 'localhost',
    STORYBOOK_GTM_PAGE_CONTEXT_ENVIRONMENT_INT: 'preview-',
    STORYBOOK_GTM_PAGE_CONTEXT_ENVIRONMENT_PROD: 'design-system.post.ch,next.design-system.post.ch',
    STORYBOOK_GTM_PAGE_CONTEXT_ENVIRONMENT_FALLBACK: 'dev',
  }),
  async viteFinal(config, options) {
    return mergeConfig(config, {
      css: {
        devSourcemap: true,
      },
    });
  },
};

export default config;
