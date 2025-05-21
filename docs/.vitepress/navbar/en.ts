import { DefaultTheme } from 'vitepress'

// 英文导航
export const enNav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/en/', activeMatch: '/en/' },
  {
    text: 'Start using', activeMatch: '/en/quick-started/', items: [{
      text: '',
      link: ''
    }]
  },
  { text: 'reference', link: '/en/reference/', activeMatch: '/en/reference/' },
]