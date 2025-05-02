<template>
  <h1>Фильм</h1>
  <div>{{ route.params.id }}</div>
  <NuxtLink to="/">Home</NuxtLink>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
