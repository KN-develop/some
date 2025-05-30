// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/test-utils', '@pinia/nuxt', '@nuxt/ui'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiURL: '/api/v1',
    },
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    routeRules: {
      '/api/v1/**': { proxy: 'https://cms.test.ksfr.tech/api/v1/**' },
    },
  },
});
