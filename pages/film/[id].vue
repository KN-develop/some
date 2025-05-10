<template>
  <h1 class="font-semibold text-2xl mb-8">
    Фильм
  </h1>
  <div>{{ route.params.id }}</div>
  <ULink to="/">Home</ULink>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
