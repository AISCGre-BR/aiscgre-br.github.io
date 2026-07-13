<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  image: { jpg: string; webp: string; alt: string }
}>()
</script>

<template>
  <figure class="photo">
    <div class="photo__frame">
      <picture>
        <source :srcset="withBase(image.webp)" type="image/webp" />
        <img :src="withBase(image.jpg)" :alt="image.alt" loading="lazy" />
      </picture>
    </div>
    <figcaption class="photo__caption">
      <slot name="caption" />
      <span class="photo__credit"><slot name="credit" /></span>
    </figcaption>
  </figure>
</template>
