import { enNav } from '../navbar'
import { enSidebar } from '../sidebar'
import dayjs from 'dayjs'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: { // Theme settings
    lastUpdatedText: 'Last updated', // Last updated display text
    returnToTopLabel: 'Return to top', // Mobile menu text display
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search',
              },
              modal: {
                displayDetails: 'Display detailed list',
                resetButtonTitle: 'Reset search',
                backButtonTitle: 'Close search',
                noResultsText: 'No relevant results found',
                footer: {
                  selectText: 'Select',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'Navigate',
                  navigateUpKeyAriaLabel: 'up arrow',
                  navigateDownKeyAriaLabel: 'down arrow',
                  closeText: 'Close',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },
    nav: enNav,
    sidebar: enSidebar, // Sidebar
    docFooter: { // Custom previous/next page names
      prev: 'Previous', next: 'Next'
    },
    darkModeSwitchLabel: 'Dark/Light mode', // Mobile dark/light mode text
    footer: { // Footer
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${dayjs().format("YYYY")}  All rights reserved.`
    },
    outline: { // Outline display 1-6 level headings
      level: [1, 6],
      label: 'Table of Contents'
    },
    // outline:false
    // Outline top title
    outlineTitle: 'On this page',
  }
}