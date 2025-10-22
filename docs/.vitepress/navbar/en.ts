import { DefaultTheme } from 'vitepress'

// 英文导航
export const enNav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/en/', activeMatch: '/en/' },
  {
    text: 'Conversion Tools',
    items: [
      { text: 'Temperature Conversion', link: '/en/Temperature/index' },
      {
        text: 'Time Conversion',
        link: '/en/Time/index'
      }, {
        text: 'Length Conversion',
        link: '/en/Length/index'
      }, {
        text: 'Area Conversion',
        link: '/en/Area/index'
      }, {
        text: 'Mass Conversion',
        link: '/en/Mass/index'
      }, {
        text: 'Speed Conversion',
        link: '/en/Speed/index'
      }]
  },
  // { text: 'Blog', link: '/en/blog/' },
  // { text: 'About', link: '/en/about/' },
]