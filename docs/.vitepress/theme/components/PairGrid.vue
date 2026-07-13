<script setup lang="ts">
defineProps<{
  equal?: boolean
}>()
</script>

<template>
  <div class="pairs" :class="{ 'pairs--equal': equal }">
    <slot />
  </div>
</template>
