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
  }
})