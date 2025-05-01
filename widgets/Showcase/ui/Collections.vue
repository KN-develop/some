<template>
  <div :class="$style.collections">
    <NuxtLink
      v-for="item in collections"
      :key="item.oid"
      :class="$style.item"
      :target="item.new_window ? '_blank' : '_self'"
      :to="'/collection/' + item.oid"
    >
      {{ item.name }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { CollectionType } from '~/widgets/Showcase/model/Collection';

defineProps<{
  collections: CollectionType[],
}>();
</script>

<style lang="postcss" module>
.collections {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  flex-wrap: wrap;
  align-items: stretch;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border-radius: 16px;
    background-color: white;
    border: thin solid wheat;
    flex-shrink: 0;
    text-align: center;
  }
}
</style>
