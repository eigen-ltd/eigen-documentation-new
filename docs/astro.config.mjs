import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import dotenv from 'dotenv';
import AutoImport from 'astro-auto-import';
import astroExpressiveCode from 'astro-expressive-code';

dotenv.config();

const site = process.env.SITE_URL || 'http://localhost:4321/';

export const locales = {
  root: { label: 'English', lang: 'en' },
  // no: { label: 'Norsk', lang: 'no' },
  // pl: { label: 'Polski', lang: 'pl' },
  // es: { label: 'Español', lang: 'es' },
  // az: { label: 'Azərbaycanca', lang: 'az' },
};

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    starlight({
      expressiveCode: {
        themes: ['dracula', 'min-light'],
        removeUnusedThemes: true,
        useStarlightUiThemeColors: true,
      },
      title: 'Eigen Documentation',
      lastUpdated: true,
      //editLink: {
      //  baseUrl: 'https://github.com/eigen-ltd/eigen-documentation/edit/main/docs/',
      //},
      locales,
      routeMiddleware: './src/routeData.ts',
      logo: {
        dark: './src/assets/eigen-dark.svg',
        light: './src/assets/eigen-light.svg',
        replacesTitle: true,
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {
              label: 'Quickstart Guide',
              collapsed: true,
              autogenerate: {
                directory: 'ingenuity/getting-started/Quickstart Guide',
              },
            },
            {
              label: 'Workspaces and Pages',
              collapsed: true,
              autogenerate: {
                directory: 'ingenuity/getting-started/Workspaces and Pages',
              },
            },
            {
              label: 'Installation Guide',
              collapsed: true,
              autogenerate: {
                directory: 'ingenuity/getting-started/Installation Guide',
              },
            },
          ],
        },

        {
          label: 'Ingenuity Modules',
          items: [
            {
              label: 'Dashboards',
              collapsed: true,
              autogenerate: {
                directory: 'ingenuity/modules/Dashboards',
              },
            },
            {
              label: 'Charts',
              collapsed: true,
              autogenerate: {
                directory: 'ingenuity/modules/Charts',
              },
            },
            {
              label: 'Calculations',
              collapsed: true,
              autogenerate: {
                directory: 'ingenuity/modules/Calculations',
              },
            },
            {
              label: 'Reports',
              collapsed: true,
              autogenerate: {
                directory: 'ingenuity/modules/Reports',
              },
            },
            {
              label: 'Scripts',
              collapsed: true,
              autogenerate: {
                directory: 'ingenuity/modules/Scripts',
              },
            },
            {
              label: 'Asset Model',
              collapsed: true,
              autogenerate: {
                directory: 'ingenuity/modules/Asset Model',
              },
            },
            {
              label: 'Data Sources',
              collapsed: true,
              autogenerate: {
                directory: 'ingenuity/modules/Data Sources',
              },
            },
            {
              label: 'Logbooks',
              collapsed: true,
              autogenerate: {
                directory: 'ingenuity/modules/Logbooks',
              },
            },
          ],
        },
        {
          label: 'Developing with Eigen',
          items: [
            {
              collapsed: true,
              label: 'API Reference',
              autogenerate: {
                directory: 'ingenuity/developing-with-eigen/api-reference',
              },
            },
            {
              collapsed: true,
              label: 'Excel Addin',
              autogenerate: {
                directory: 'ingenuity/developing-with-eigen/excel-addin',
              },
            },
            {
              collapsed: true,
              label: 'Python Library',
              items: [
                {
                  label: 'Intro to the Python SDK',
                  link: 'ingenuity/developing-with-eigen/python-library/overview',
                },
                {
                  label: 'Authentication',
                  link: '/ingenuity/developing-with-eigen/python-library/authentication',
                },
                {
                  label: 'Historian Multi',
                  autogenerate: {
                    directory: 'ingenuity/developing-with-eigen/python-library/Historian Multi',
                  },
                },
                {
                  label: 'Asset Model',
                  autogenerate: {
                    directory: 'ingenuity/developing-with-eigen/python-library/Asset Model',
                  },
                },

                {
                  label: 'Common Menu',
                  autogenerate: {
                    directory: 'ingenuity/developing-with-eigen/python-library/Common Menu',
                  },
                },
                {
                  label: 'Eventlog',
                  autogenerate: {
                    directory: 'ingenuity/developing-with-eigen/python-library/Eventlog',
                  },
                },
                {
                  label: 'SQL',
                  autogenerate: {
                    directory: 'ingenuity/developing-with-eigen/python-library/SQL',
                  },
                },
                {
                  label: 'Historian',
                  badge: {
                    text: 'Deprecated',
                    variant: 'danger',
                  },
                  items: [
                    {
                      label: 'The Legacy Historian Module',
                      link: '/ingenuity/developing-with-eigen/python-library/historian/overview',
                    },
                  ],
                },
                {
                  label: 'Elastic',
                  badge: {
                    text: 'Deprecated',
                    variant: 'danger',
                  },
                  items: [
                    {
                      label: 'The Legacy Elastic Module',
                      link: '/ingenuity/developing-with-eigen/python-library/elastic/overview',
                    },
                  ],
                },
                
              ],
            },
            {
              collapsed: true,
              label: 'Office 365 Connector',
              badge: {
                text: 'TBA',
                variant: 'caution',
              },
              autogenerate: {
                directory: 'ingenuity/developing-with-eigen/office-connector',
              },
            },
          ],
        },
  // --- BSP ---
        {
          label: 'Getting Started with BSP',
          autogenerate: {
                directory: 'bsp/getting-started/',
          collapsed: true,
          }
        },
        {
          label: 'User Guide',
          autogenerate: {
                directory: 'bsp/user-guide',
          collapsed: true,
          }
        },

    // --- END BSP --- (update in routeData.ts if changing)

      ],
      plugins: [starlightThemeNova()],
    }),

    AutoImport({
      imports: [
        {
          '@astrojs/starlight/components': [
            'Aside',
            'Badge',
            'CardGrid',
            'Card',
            'FileTree',
            'Icon',
            'Steps',
            'Tabs',
            'TabItem',
            // 'Code',
          ],
          'starlight-theme-nova/components': [
            'Code',
            'CodeFile',
            'LinkButton',
            'LinkCard',
            'CodeTabItem',
            'CodeTabs',
          ],
        },
      ],
    }),
  ],
});
