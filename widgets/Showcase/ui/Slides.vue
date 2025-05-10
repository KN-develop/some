<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-3 flex-wrap no:lg:text-sm">
    <UCard
      v-for="item in slides"
      :key="item.oid"
      as="article"
      :ui="{
        root: 'flex flex-col',
        body: 'sm:p-0 p-0',
        footer: 'p-4 sm:px-6 grow',
      }"
    >
      <template #header>
        <h2 class="truncate font-bold">
          <ULink :to="`/film/${item.oid}`" :title="item.title.title" inactive-class="text-green-600">
            {{ item.title.title }}
          </ULink>
        </h2>
      </template>

      <div class="w-full aspect-2/1">
        <img class="block h-full w-full object-cover" :src="getImgUrl(item.title.assets[0]?.resize_url)" :alt="item.title.title">
      </div>

      <template #footer>
        <div class="flex flex-col h-full">
          <p class="mb-auto mt-0">
            {{ item.title.synopsis }}
          </p>
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="flex flex-wrap gap-2 items-start">
              <UBadge
                v-for="genre in item.title.genres"
                :key="genre.oid"
                color="neutral"
                class="max-w-full"
                size="sm"
              >
                <span class="truncate">{{ genre.name }}</span>
              </UBadge>
            </div>
            <div class="flex flex-wrap gap-2 items-start justify-end">
              <UBadge v-for="label in item.title.labels" :key="label.oid" class="max-w-full" size="sm">
                <span class="truncate">{{ label.name }}</span>
              </UBadge>
            </div>
          </div>
        </div>
      </template>
    </UCard>
  </section>
</template>

<script lang="ts" setup>
import type { SlideType } from '../model/Slide';

const SIZE = 720;
const getImgUrl = (url: string) => url.replace('{w}', String(SIZE)).replace('{h}', String(SIZE));

defineProps<{
  slides: SlideType[],
}>();
</script>
