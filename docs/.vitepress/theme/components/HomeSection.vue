<script setup lang="ts">
defineProps<{
  id: string
  label: string
  alt?: boolean
}>()
</script>

<template>
  <section class="section" :class="{ 'section--alt': alt }" :id="id" :aria-labelledby="`sec-${id}`">
    <div class="section__inner">
      <p class="section__label" :id="`sec-${id}`">{{ label }}</p>
      <div class="section__body">
        <slot />
      </div>
    </div>
  </section>
</template>
