import { DefaultTheme } from 'vitepress'

// 中文导航
export const zhNav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '转换工具',
    items: [
      { text: '温度转换', link: '/Temperature/index' },
      {
        text: '时间转换',
        link: '/Time/index'
      }, {
        text: '长度转换',
        link: '/Length/index'
      }, {
        text: '面积转换',
        link: '/Area/index'
      }, {
        text: '重量转换',
        link: '/Mass/index'
      }]
  },
  // { text: '博客', link: '/blog/' },
  { text: '关于', link: '/about/' },
]
