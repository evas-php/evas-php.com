
const { ConfigBuilder } = require('../../../common/ConfigBuilder.js')

const config = (new ConfigBuilder)
.setMeta({
  title: 'Evas-Router',
  description: 'Official documentation of the Evas-Router php library'
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
        '/guide/router-resolver-types', 
        '/guide/routing', 
      ]
    },
    {
      text: 'Настройка роутера', 
      collapsable: false,
      sidebarDepth: 3,
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
      text: 'Вложенные роутеры', 
      collapsable: false,
      sidebarDepth: 3,
      children: [
        '/guide/routers/map',
        '/guide/routers/auto-by-file',
        '/guide/routers/auto-by-class',
        '/guide/routers/auto-by-class-method',
        '/guide/routers/auto-by-func',
      ],
    },
  ]
}).getConfig()

module.exports = config;
