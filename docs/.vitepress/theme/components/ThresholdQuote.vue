<script setup lang="ts">
defineProps<{
  kicker: string
  ariaLabel: string
}>()
</script>

<template>
  <section class="threshold" :aria-label="ariaLabel">
    <div class="threshold__inner">
      <p class="threshold__kicker">{{ kicker }}</p>
      <blockquote class="threshold__quote"><slot /></blockquote>
    </div>
  </section>
</template>
