import { defineConfig } from 'vitepress'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress",
  lang: 'zh-CN',
  description: "我的vitepress项目",
  themeConfig: {
    // 菜单配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南', items: [
          {
            text: '介绍',
            items: [
              {
                text: '前言', link: '/preface'
              }
            ]
          }, {
            text: '基础设置',
            items: [
              {
                text: '快速上手', link: '/getting-started'
              }, {
                text: '配置', link: '/configuration'
              }, {
                text: '页面', link: '/page'
              }, {
                text: 'Frontmatter', link: '/frontmatter'
              }
            ]
          }, {
            text: '进阶玩法',
            items: [
              {
                text: 'Markdown', link: '/Markdown'
              }, {
                text: '静态部署', link: '/assets'
              }
            ]
          }
        ]
      },
      { text: `VitePress${pkg.version}`, link: 'https://vitepress.dev/zh/' }
    ],
    sidebar: [
      {
        //分组标题
        text: '指南',
        items: [
          { text: '前言', link: '/preface' },
          { text: '快速上手', link: '/getting-started' },
          { text: '配置', link: '/configuration' },
          { text: '页面', link: '/page' },
          { text: 'Frontmatter', link: '/frontmatter' },
          { text: 'Markdown', link: '/markdown' },
          { text: '静态部署', link: '/assets' },
        ],
      },
    ],
    // 社交图标配置
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/' },
      { icon: 'discord', link: 'https://chat.vitejs.dev/' },
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2019-${new Date().getFullYear()} present Evan You`,
    },
  },

  // 站点地图
  sitemap: {
    hostname: 'https://你的网址.com',
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  }
})
