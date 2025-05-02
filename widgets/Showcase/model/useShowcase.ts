import type { MaybeRefOrGetter } from 'vue';
import type { CollectionType } from './Collection';
import type { SlideType } from './Slide';

export type ShowcaseResourceType = {
  oid: string,
  name: string,
  slides: SlideType[],
  collections: CollectionType[],
};

export const useShowcase = (name: MaybeRefOrGetter<string>) => {
  const { dict } = storeToRefs(useDict());

  const { data, status } = useAPI(() => `/showcases/showcases/${toValue(name)}`);

  const showcase = computed(() => useDict().merge<ShowcaseResourceType>(toValue(data), toValue(dict)));

  return {
    showcase,
    status,
  };
};
