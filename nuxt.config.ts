// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/icon'
  ],

  fonts: {
    families: [
      { name: 'Bebas Neue', provider: 'google' },
      { name: 'Barlow', provider: 'google', weights: [300, 400, 500, 600, 700] }
    ]
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/genfavicon-package/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/genfavicon-package/genfavicon-16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/genfavicon-package/genfavicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/genfavicon-package/genfavicon-48.png' },
        { rel: 'icon', type: 'image/png', sizes: '57x57', href: '/genfavicon-package/genfavicon-57.png' },
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/genfavicon-package/genfavicon-64.png' },
        { rel: 'icon', type: 'image/png', sizes: '114x114', href: '/genfavicon-package/genfavicon-114.png' },
        { rel: 'icon', type: 'image/png', sizes: '120x120', href: '/genfavicon-package/genfavicon-120.png' },
        { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/genfavicon-package/genfavicon-128.png' },
        { rel: 'icon', type: 'image/png', sizes: '180x180', href: '/genfavicon-package/genfavicon-180.png' },
        { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/genfavicon-package/genfavicon-256.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/genfavicon-package/genfavicon-512.png' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/genfavicon-package/apple-touch-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/genfavicon-package/apple-touch-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/genfavicon-package/apple-touch-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/genfavicon-package/apple-touch-icon-180x180.png' },
        { rel: 'apple-touch-icon', href: '/genfavicon-package/apple-touch-icon.png' },
        { rel: 'manifest', href: '/genfavicon-package/site.webmanifest' }
      ]
    }
  }
})