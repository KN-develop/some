// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/test-utils', '@pinia/nuxt'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiURL: 'https://cms.test.ksfr.tech/api/v1',
    },
  },
  compatibilityDate: '2024-11-01',
});
