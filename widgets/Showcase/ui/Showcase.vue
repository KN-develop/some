<template>
  <h1>{{ showcase.name }}</h1>
  <Slides v-if="showcase.slides" :slides="showcase.slides" />
<!--  <Collections v-if="showcase.collections" :collections="showcase.collections" /> -->
</template>

<script lang="ts" setup>
import { useShowcase } from '../model/Showcase';
import Slides from '~/widgets/Showcase/ui/Slides.vue';
import Collections from '~/widgets/Showcase/ui/Collections.vue';

const props = defineProps<{
  name: string,
}>();

const { showcase } = useShowcase(props.name);

useSeoMeta({
  title: () => toValue(showcase).name,
});
</script>
