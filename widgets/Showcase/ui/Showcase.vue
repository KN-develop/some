<template>
  <div v-if="!isPending(status) && showcase">
    <h1>{{ showcase.name }}</h1>
    <Slides v-if="showcase.slides" :slides="showcase.slides" />
  </div>
</template>

<script lang="ts" setup>
import { useShowcase } from '../model/useShowcase';
import Slides from '../ui/Slides.vue';

const props = defineProps<{
  name: string,
}>();

const { showcase, status } = useShowcase(props.name);

useSeoMeta({
  title: () => toValue(showcase)?.name,
});
</script>
