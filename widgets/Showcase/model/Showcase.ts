import type { MaybeRefOrGetter } from 'vue';
import type { CollectionType } from '~/widgets/Showcase/model/Collection';
import type { SlideType } from '~/widgets/Showcase/model/Slide';
import { useDict } from '~/composables/useDict';
import { apiFetch } from '#shared/api/apiFetch';

export type ShowcaseResourceType = {
  oid: string,
  name: string,
  slides: SlideType[],
  collections: CollectionType[],
};

export const useShowcase = (name: MaybeRefOrGetter<string>) => {
  const { dict } = storeToRefs(useDict());

  const { data } = apiFetch(() => `/showcases/showcases/${toValue(name)}`);

  const showcase = computed(() => useDict().merge<ShowcaseResourceType>(toValue(data), toValue(dict)));

  return {
    showcase,
  };
};
