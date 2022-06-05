const { description } = require('../../../package')
const fs = require('fs');
const path = require('path');
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'EvasPHP Router',
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
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: 'Guide', link: '/guide/', },
      { text: 'Contact',
        items: [
          { text: 'Vk Community', link: 'https://vk.com/evasphp' },
          { text: 'Facebook Page', link: 'https://facebook.com/evasphp' },
          { text: 'Telegram Chat', link: 'https://t.me/evasphp' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/evas-php' },
      { text: 'Packagist', link: 'https://packagist.org/packages/evas-php/' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Введение', 
          collapsable: false, // optional, defaults to true
          sidebarDepth: 3,    // optional, defaults to 1
          children: [
            '/guide/installation',
            '/guide/start', 
            '/guide/router-types', 
            '/guide/router-resolver-types', 
            '/guide/routing', 
          ]
        },
        {
          title: 'Настройка роутера', 
          collapsable: false, // optional, defaults to true
          sidebarDepth: 3,    // optional, defaults to 1
          children: [
            '/guide/base/default',
            '/guide/base/route',
            '/guide/base/route-rest',
            '/guide/base/props',
            '/guide/base/aliases',
            '/guide/base/middlewares',
            '/guide/base/controller-class',
            '/guide/base/views-dir',
            '/guide/base/groups',
          ],
        },
        {
          title: 'Вложенные роутеры', 
          collapsable: false, // optional, defaults to true
          sidebarDepth: 3,    // optional, defaults to 1
          children: [
            '/guide/groups/map',
            '/guide/groups/auto-by-file',
            '/guide/groups/auto-by-class',
            '/guide/groups/auto-by-method',
            '/guide/groups/auto-by-class-method',
            '/guide/groups/auto-by-func',
          ],
        },
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    // '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-medium-zoom',
  ]
}
