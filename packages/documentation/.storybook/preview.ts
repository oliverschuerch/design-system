import type { Preview } from '@storybook/web-components';
import { extractArgTypes } from '@pxtrn/storybook-addon-docs-stencil';
import { format } from 'prettier';
import DocsLayout from './blocks/layout';
import { badgesConfig, openFullScreenDemo, prettierOptions, resetComponents } from './helpers';
import './helpers/register-web-components';
import './addons/cypress-storybook/client';

import './styles/preview.scss';

import { SyntaxHighlighter } from '@storybook/components';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';

SyntaxHighlighter.registerLanguage('scss', scss);

export const SourceDarkMode = true;

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Home',

          // Category - Getting Started
          'Getting Started',
          ['Styles', 'Components', 'Components-Angular', 'Compatibility'],

          // Category - Foundations
          'Foundations',
          [
            'Typography',
            'Color',
            'Layout',
            ['Breakpoints', 'Containers', 'Grid', 'Columns', 'TODOS'],
            'Elevation',
            'Accessibility',
          ],

          // Category - Components
          'Components',
          [
            'Accordion',
            'Alert',
            'Badge',
            'Blockquote',
            'Button',
            'Button Group',
            'Cards',
            'Carousel',
            'Collapsible',
            'Datepicker',
            'Dropdown',
            'Forms',
            'Heading',
            'Icons',
            ['Getting Started'],
            'Internet Header',
            ['Getting Started', 'Header'],
            'Intranet Header',
            'Modal',
            'Notification overlay',
            'Pagination',
            'Popover',
            'Progressbar',
            'Rating',
            'Spinner',
            'Stepper',
            'Subnavigation',
            'Table',
            'Tabs',
            'Timepicker',
            'Toast',
            'Tooltip',
            'Topic Teaser',
            'Typeahead',
          ],

          // Category - Patterns
          'Patterns',
          ['Metadata', 'Forms'],

          // Category - Utilities
          'Utilities',

          // Category - Misc
          'Misc',
          ['Migration Guide', 'Changelog', 'Versions'],

          // Category - Snapshots (hidden)
          'Snapshots',
        ],
      },
    },
    docs: {
      container: DocsLayout,
      canvas: {
        additionalActions: [
          {
            title: 'View full screen',
            onClick: openFullScreenDemo,
          },
        ],
      },
      source: {
        excludeDecorators: true,
        dark: SourceDarkMode,
        transform: (snippet: string) => format(snippet, prettierOptions),
      },
      components: resetComponents,
      extractArgTypes,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    badgesConfig,
  },
};

export default preview;
