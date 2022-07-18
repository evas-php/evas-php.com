const { description } = require('../../../package')
const fs = require('fs');
const path = require('path');

const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Evas-Validate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: defaultTheme({
    editLinks: true,
    repo: 'evas-php/evas-php.com',
    repoLabel: 'Docs GitHub',
    docsDir: 'docs/validate',
    docsBranch: 'evas-validate',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: true,
    contributors: true,
    // logo: '/img/evas-php-logo.jpg',
    navbar: [
      { text: 'Guide', link: '/guide/', },
      { text: 'Community',
        children: [
          { text: 'Discord Server', link: 'https://evas-php.com' },
          { text: 'Telegram Chat', link: 'https://t.me/evasphp' },
          { text: 'Vk Community', link: 'https://vk.com/evasphp' },
          { text: 'Facebook Page', link: 'https://facebook.com/evasphp' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/evas-php' },
      { text: 'Packagist', link: 'https://packagist.org/packages/evas-php/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Введение', 
          collapsable: false, // optional, defaults to true
          sidebarDepth: 3,    // optional, defaults to 1
          children: [
            '/guide/',
            '/guide/installation',
          ]
        },
        {
          text: 'Валидатор поля', 
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            '/guide/base/field',
            '/guide/base/prepared-fields',
          ],
        },
        {
          text: 'Валидатор набора полей', 
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            '/guide/base/fieldset',
            '/guide/base/json-fieldset',
            '/guide/base/errors',
          ],
        },
        {
          text: 'Дополнительно', 
          collapsable: false, // optional, defaults to true
          sidebarDepth: 3,    // optional, defaults to 1
          children: [
            '/guide/extra/constants',
            '/guide/extra/custom-errors',
            '/guide/extra/html-serialize',
          ],
        },
      ]
    }
  }),

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-medium-zoom',
    searchPlugin({
      locales: {
        '/': { placeholder: 'Найти' },
      }
    }),
  ]
}
