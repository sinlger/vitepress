import { DefaultTheme } from 'vitepress'

// 中文导航
export const zhNav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '换算工具',
    items: [
      { text: '温度换算', link: '/Temperature/' },
      {
        text: '时间换算',
        link: '/Time/'
      }, {
        text: '长度换算',
        link: '/Length/'
      }, {
        text: '面积换算',
        link: '/Area/'
      }, {
        text: '重量换算',
        link: '/Mass/'
      }]
  },
  // { text: '博客', link: '/blog/' },
  { text: '关于', link: '/about/' },
]
