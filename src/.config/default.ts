import type { ThemeConfig } from '~/types'

// This is the default configuration for the template, please do not modify it directly.
// You can override this configuration in the `.config/user.ts` file.

export const defaultConfig: ThemeConfig = {
  site: {
    title: '七彩水墨人生',
    subtitle: '在路上的思绪与脚印',
    author: 'Ficor',
    description: '在路上的思绪与脚印',
    website: 'https://vii.ink',
    pageSize: 5,
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/panjinye',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'mastodon',
        href: 'https://mastodon.social/@ficor',
      },
    ],
    navLinks: [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: '归档',
        href: '/archive',
      },
      {
        name: '说说',
        href: '/say',
      },
      {
        name: '友链',
        href: '/links',
      },
      {
        name: '友圈',
        href: '/friends',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    categoryMap: [{ name: '胡适', path: 'hu-shi' }],

    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
      'Powered by <a target="_blank" href="https://astro.build/">Astro</a>',
      'Theme by <a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">Typography</a> ',
    ],
  },
  appearance: {
    theme: 'system',
    locale: 'zh-cn',
    colorsLight: {
      primary: '#313E5A',
      background: '#ffffff',
    },
    colorsDark: {
      primary: '#FFFFFF',
      background: '#232222',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    twitter: '@JinyePan',
    meta: [],
    link: [],
  },
  rss: {
    fullText: true,
  },
  comment: {
    // disqus: { shortname: "typography-astro" },
  },
  analytics: {
    googleAnalyticsId: '',
    umamiAnalyticsId: '',
  },
  latex: {
    katex: false,
  },
}
