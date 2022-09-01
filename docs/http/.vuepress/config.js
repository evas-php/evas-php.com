const { ConfigBuilder } = require('../../../common/ConfigBuilder.js')

const config = (new ConfigBuilder)
.setMeta({
  title: 'Evas-Http',
  description: 'Official documentation of the Evas-Http php library'
})
.setRepo({
  docsDir: 'docs/router'
})
.addNavbarRepo('evas-router')
.setSidebar({
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
      text: 'Http', 
      collapsable: false,
      sidebarDepth: 3,
      children: [
        '/guide/http/request',
        '/guide/http/response',
        '/guide/http/uploaded-file',
      ],
    },
    {
      text: 'Curl', 
      collapsable: false,
      sidebarDepth: 3,
      children: [
        '/guide/curl/request',
        '/guide/curl/response',
      ],
    },
    {
      text: 'Вспомогательные классы', 
      collapsable: false,
      sidebarDepth: 3,
      children: [
        '/guide/more/uri',
        '/guide/more/cookie',
      ],
    },
    {
      text: 'Интерфейсы', 
      collapsable: false,
      sidebarDepth: 3,
      children: [
        '/guide/interfaces/request',
        '/guide/interfaces/response',
        '/guide/interfaces/uploaded-file',
        '/guide/interfaces/uri',
      ],
    },
  ]
}).getConfig()

module.exports = config;
