<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="pair">
    <h3 class="pair__title">{{ title }}</h3>
    <slot />
  </div>
</template>
