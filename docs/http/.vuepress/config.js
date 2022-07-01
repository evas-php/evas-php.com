const { description } = require('../../../package')
const fs = require('fs');
const path = require('path');
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Evas-Http',
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
    ['meta', { name: 'theme-color', content: '#617cbf' }],
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
    // logo: '/img/evas-php-logo.jpg',
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
            '/guide/',
            '/guide/installation',
          ]
        },
        {
          title: 'Http', 
          collapsable: false, // optional, defaults to true
          sidebarDepth: 3,    // optional, defaults to 1
          children: [
            '/guide/http/request',
            '/guide/http/response',
            '/guide/http/uploaded-file',
          ]
        },
        {
          title: 'Curl', 
          collapsable: false, // optional, defaults to true
          sidebarDepth: 3,    // optional, defaults to 1
          children: [
            '/guide/curl/request',
            '/guide/curl/response',
          ]
        },
        {
          title: 'Вспомогательные классы', 
          collapsable: false, // optional, defaults to true
          sidebarDepth: 3,    // optional, defaults to 1
          children: [
            '/guide/more/uri',
            '/guide/more/cookie',
          ]
        },
        {
          title: 'Интерфейсы', 
          collapsable: false, // optional, defaults to true
          sidebarDepth: 3,    // optional, defaults to 1
          children: [
            '/guide/interfaces/request',
            '/guide/interfaces/response',
            '/guide/interfaces/uploaded-file',
            '/guide/interfaces/uri',
          ]
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
