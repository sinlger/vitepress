import { defineConfig } from 'vitepress'

import { loadEnv } from 'vite'
const mode = process.env.NODE_ENV || 'development'
const { VITE_BASE_URL } = loadEnv(mode, process.cwd())
const fileAndStyles: Record<string, string> = {}

export const sharedConfig = defineConfig({
  rewrites: { // 很重要，
    'zh/:rest*': ':rest*'
  },
  metaChunk: true,
  lang: 'zh-CN', // 语言
  title: "Unit Converter", // 站点名称
  titleTemplate: "Unit Converter - 支持多种单位的在线转换工具", // 网页标题
  description: "Unit Converter 是一个多功能单位转换工具，支持长度、重量、体积、温度等多种单位转换，帮助用户快速解决日常或专业场景中的换算问题。", // 站点描述
  head: [ // favicon.ico 图标等
    ['link', { rel: "shortcut icon", href: `${VITE_BASE_URL}logo.svg` }],
    // 网站 favicon.ico 图标
    ['link', { rel: "icon", href: `${VITE_BASE_URL}logo.svg`, type: "image/svg+xml" }],
    // 引入 Google Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }],
    // 网页视口
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no" }],
    // 关键词和描述
    ['meta', { name: "keywords", content: "单位转换, 长度转换, 重量转换, 体积转换, 温度转换, 在线工具" }],
  ],
  // appearance: true, // 主题模式，默认浅色且开启切换
  base: VITE_BASE_URL,
  lastUpdated: true, // 上次更新
  vite: {
    build: {
      chunkSizeWarningLimit: 1600
    },
    plugins: [],
    server: {
      port: 18089
    },
    ssr: {
      noExternal: ['naive-ui', 'date-fns', 'vueuc'],
    },
  },
  postRender(context) {
    const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/
    const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
    const style = styleRegex.exec(context.content)?.[1]
    const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
    if (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.content = context.content.replace(styleRegex, '')
    context.content = context.content.replace(vitepressPathRegex, '')
  },
  transformHtml(code, id) {
    const html = id.split('/').pop()
    if (!html)
      return
    const style = fileAndStyles[`/${html}`]
    if (style) {
      return code.replace(/<\/head>/, `${style}</head>`)
    }
  },
  // 站点地图
  sitemap: {
    hostname: 'https://unitconver.com/',
  },
  markdown: { // markdown 配置
    math: true,
    lineNumbers: true, // 行号显示
    image: {
      // 开启图片懒加载
      lazyLoading: true
    }
  },
  themeConfig: { // 主题设置
    search: {
      provider: 'local',
      options: {
        locales: {
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search',
              },
              modal: {
                displayDetails: 'Display detailed list',
                resetButtonTitle: 'Reset search',
                backButtonTitle: 'Close search',
                noResultsText: 'No results for',
                footer: {
                  selectText: 'to select',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'to navigate',
                  navigateUpKeyAriaLabel: 'up arrow',
                  navigateDownKeyAriaLabel: 'down arrow',
                  closeText: 'to close',
                  closeKeyAriaLabel: 'escape',
                },
              },
            },
          },

        },
      },
    },
    logo: '/logo.svg',  // 左上角logo
  }
})