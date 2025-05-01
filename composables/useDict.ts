import { apiFetch } from '#shared/api/apiFetch';

const DICTIONARIES = [
  'countries',
  'genres',
  'jobs',
  'kind',
  'labels',
  'rewards',
  'studios',
];

const merge = <T = unknown>(data: unknown, dict: DictType): T => {
  // @ts-ignore
  if (!data) return data;

  if (Array.isArray(data)) {
    // @ts-ignore
    return data.map(el => merge(el, dict));
  }
  if (typeof data === 'object') {
    const res: Record<string, any> = {};
    Object.entries(data).forEach(([key, value]) => {
      res[key] = merge(value, dict);
    });
    // @ts-ignore
    return res;
  }
  if (typeof data === 'string') {
    const strs = data.split(':');
    if (strs.length > 2) {
      // @ts-ignore
      return data;
    } else {
      const { 0: key, 1: id } = strs;
      const actualDict = dict[key];
      const foundDict = actualDict && actualDict.find(el => el.oid === data);
      // @ts-ignore
      return foundDict || data;
    }
  }

  // @ts-ignore
  return data;
};

export type DictType = Record<string, { oid: string }[]>;

export const useDict = defineStore('Dict', () => {
  const data = reactive(DICTIONARIES.map(name => apiFetch<Array<{ oid: string }>>(`/metadata/${name}`)));

  const dict = computed<DictType>(() => {
    const res: DictType = {};
    data
      .map(el => el.data)
      .map(el => toValue(el))
      .map(el => Array.isArray(el) && el.length && [el[0].oid.split(':')[0], el] || [null, el])
      .filter(el => el[0])
      .forEach(([key, value]) => (res[key] = value));

    return res;
  });

  return {
    dict,

    merge,
  };
});
