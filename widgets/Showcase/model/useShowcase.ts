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
  const { data: showcase, status } = useAPI(
    () => `/showcases/showcases/${toValue(name)}`,
  );
  return {
    showcase,
    status,
  };
};
