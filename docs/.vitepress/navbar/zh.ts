import { DefaultTheme } from 'vitepress'

// 中文导航
export const zhNav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '转换工具',
    items: [
      { text: '进制转换器', link: '/radix/' },
      {
        text: '时间转换器',
        link: '/time/'
      }, {
        text: '面积转换器',
        link: '/area/'
      }, {
        text: '温度转换器',
        link: '/temperature/'
      }, {
        text: '重量转换器',
        link: '/weight/'
      }, {
        text: '长度转换器',
        link: '/distance/'
      }]
  },
  { text: '博客', link: '/blog/' },
  { text: '关于', link: '/about/' },
]
