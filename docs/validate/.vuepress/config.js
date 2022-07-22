// const fs = require('fs');
// const path = require('path');

const { ConfigBuilder } = require('../../../common/ConfigBuilder.js')

const config = (new ConfigBuilder)
.setMeta({
  title: 'Evas-Validate',
  description: 'Official documentation of the Evas-Validate php library'
})
.addNavbarRepo('evas-validate')
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
      text: 'Валидатор поля', 
      collapsable: false,
      sidebarDepth: 1,
      children: [
        '/guide/base/field',
        '/guide/base/prepared-fields',
      ],
    },
    {
      text: 'Валидатор набора полей', 
      collapsable: false,
      sidebarDepth: 1,
      children: [
        '/guide/base/fieldset',
        '/guide/base/json-fieldset',
        '/guide/base/errors',
      ],
    },
    {
      text: 'Дополнительно', 
      collapsable: false,
      sidebarDepth: 3,
      children: [
        '/guide/extra/custom-errors',
        '/guide/extra/html-serialize',
        '/guide/extra/constants',
      ],
    },
  ]
}).getConfig()

module.exports = config;
