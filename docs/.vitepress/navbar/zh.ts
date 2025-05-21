import { DefaultTheme } from 'vitepress'

// 中文导航
export const zhNav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '转换工具', link: '/quick-started/', activeMatch: '/quick-started/' },
  { text: '博客', link: '/blog/', activeMatch: '/blog/' },
  { text: '关于', link: '/about/', activeMatch: '/about/' },
]