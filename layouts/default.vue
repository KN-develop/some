<template>
  <div class="px-4 py-8">
    <slot v-if="!pending" />
  </div>
</template>

<script lang="ts" setup>
const { pending } = storeToRefs(useDict());
</script>
