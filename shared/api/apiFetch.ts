import type { MaybeRefOrGetter } from 'vue';
import type { UseFetchOptions } from 'nuxt/app';

export const apiFetch = <T>(url: MaybeRefOrGetter<string>, options: UseFetchOptions<T> = {}) => useFetch(
  url,
  {
    ...options,
    $fetch: useNuxtApp().$api as typeof $fetch,
  },
);
