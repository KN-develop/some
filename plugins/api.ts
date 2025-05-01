import { defineNuxtPlugin } from 'nuxt/app';
import type { $Fetch, NitroFetchRequest } from 'nitropack';

declare module '#app' {
  interface NuxtApp {
    $api: $Fetch<unknown, NitroFetchRequest>,
  }
}

declare module 'vue' {
  interface NuxtApp {
    $api: $Fetch<unknown, NitroFetchRequest>,
  }
}

export default defineNuxtPlugin({
  name: 'api',
  async setup(nuxtApp) {
    const api = $fetch.create({
      baseURL: useRuntimeConfig().public.apiURL as string,
      retry: false,
    });
    return {
      provide: {
        api,
      },
    };
  },
});
