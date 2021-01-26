const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'ITS Docs',
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
      {
        text: 'Tài liệu',
        link: '/guide/',
      },
      {
        text: 'ITS Web',
        link: 'http://portal.feavn.com.vn/ITS/'
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/guide/',
        children: [
          {
            title: 'Quản lý IT',
            path: '/itmanager/',
          },
          {
            title: 'Smart Cutting',
            path: '',
            children: [
              '/smartcutting/intro',
              '/smartcutting/resolve'
            ]
          },
          {
            title: 'Smart QC',
            path: '',
            children: [
              '/smartqc/smart-qc'
            ]
          }
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
