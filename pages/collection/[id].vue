<template>
  <h1>Коллекция</h1>
  <div>{{ route.params.id }}</div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
