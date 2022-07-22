const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

class ConfigBuilder
{
  meta = {
    title: 'Evas-PHP',
    description: 'Documentation of the Evas-PHP module',
    head: [],
  }

  repo = {
    editLinks: true,
    repo: 'evas-php/evas-php.com',
    repoLabel: 'Docs GitHub',
    docsDir: 'docs/validate',
    docsBranch: 'evas-validate',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: true,
    contributors: true,
  }

  navbar = [
    { text: 'Guide', link: '/guide/', },
    { text: 'Ecosystem',
      children: [
        { text: 'Evas-PHP Homepage', link: 'https://evas-php.com' },
        { text: 'Evas-Router', link: 'https://router.evas-php.com' },
        { text: 'Evas-Validate', link: 'https://validate.evas-php.com' },
      ]
    },
    { text: 'Community',
      children: [
        // { text: 'Discord Server', link: 'https://evas-php.com' },
        { text: 'Telegram Chat', link: 'https://t.me/evasphp' },
        { text: 'Vk Community', link: 'https://vk.com/evasphp' },
        { text: 'Facebook Page', link: 'https://facebook.com/evasphp' }
      ]
    },
  ]

  navbarRepoAdded = false

  sidebar = {}

  plugins = [
    '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-medium-zoom',
    searchPlugin({
      locales: {
        '/': { placeholder: 'Найти' },
      }
    }),
  ]

  setMeta(values) {
    this.meta = Object.assign(this.meta, values)
    return this
  }

  setRepo(values) {
    this.repo = Object.assign(this.repo, values)
    return this
  }

  addNavbarItem(index, ...values) {
    this.navbar.splice(index, 0, ...values)
    return this
  }

  pushNavbarItem(...values) {
    this.navbar.push(...values)
    return this
  }


  addNavbarRepo(repo) {
    if (true === this.navbarRepoAdded) throw Error('NavbarRepo already added');
    this.pushNavbarItem(
      { text: 'GitHub', link: 'https://github.com/evas-php/' + repo },
      { text: 'Packagist', link: 'https://packagist.org/packages/evas-php/' + repo }
    )
    this.navbarRepoAdded = true
    return this
  }

  setSidebar(sidebar) {
    this.sidebar = sidebar
    return this
  }

  addPlugin(...values) {
    this.plugins.push(...values)
    return this
  }

  getConfig() {
    return Object.assign(
      this.meta, {
        theme: defaultTheme(Object.assign(
          this.repo, {
            navbar: this.navbar,
            sidebar: this.sidebar,
          }
        )),
        plugins: this.plugins,
      }
    )
  }
}

// const preset = {
//   // title: 'Evas-Validate',
//   description: description,
//   head: [],
//   theme: defaultTheme({
//     editLinks: true,
//     repo: 'evas-php/evas-php.com',
//     repoLabel: 'Docs GitHub',
//     docsDir: 'docs/validate',
//     docsBranch: 'evas-validate',
//     editLinkText: 'Edit this page on GitHub',
//     lastUpdated: true,
//     contributors: true,
//     // logo: '/img/evas-php-logo.jpg',
//     navbar: [
//       { text: 'Guide', link: '/guide/', },
//       { text: 'Community',
//         children: [
//           { text: 'Discord Server', link: 'https://evas-php.com' },
//           { text: 'Telegram Chat', link: 'https://t.me/evasphp' },
//           { text: 'Vk Community', link: 'https://vk.com/evasphp' },
//           { text: 'Facebook Page', link: 'https://facebook.com/evasphp' }
//         ]
//       },
//       { text: 'GitHub', link: 'https://github.com/evas-php' },
//       { text: 'Packagist', link: 'https://packagist.org/packages/evas-php/' }
//     ],
//     sidebar: {},
//   }),

//   plugins: [
//     '@vuepress/plugin-back-to-top',
//     // '@vuepress/plugin-medium-zoom',
//     searchPlugin({
//       locales: {
//         '/': { placeholder: 'Найти' },
//       }
//     }),
//   ]
// }

// const theme = function (props) {
//     return Object.assign(preset, props)
// }

module.exports = {
    ConfigBuilder
}
