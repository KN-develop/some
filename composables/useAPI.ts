import type { MaybeRefOrGetter } from 'vue';
import type { UseFetchOptions } from 'nuxt/app';

const useAPI = <T = unknown>(url: MaybeRefOrGetter<string>, options: UseFetchOptions<T> = {}) => useFetch(
  url,
  {
    transform: (res) => {
      const { dict } = storeToRefs(useDict());
      return useDict().merge<T>(res, toValue(dict));
    },
    ...options,
    $fetch: useNuxtApp().$api as typeof $fetch,
  },
);

export default useAPI;
