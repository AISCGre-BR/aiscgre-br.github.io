<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  image: { jpg: string; webp: string; alt: string }
}>()
</script>

<template>
  <section class="hero hero--split" id="inicio" aria-labelledby="hero-title">
    <div class="hero__grid hero__grid--split">
      <div class="hero__text">
        <p class="hero__kicker"><slot name="kicker" /></p>
        <h1 class="hero__title" id="hero-title"><slot name="title" /></h1>
        <p class="hero__dek"><slot name="dek" /></p>
        <div class="hero__meta"><slot name="actions" /></div>
      </div>

      <figure class="hero__figure">
        <div class="plate plate--photo">
          <picture>
            <source :srcset="withBase(image.webp)" type="image/webp" />
            <img :src="withBase(image.jpg)" :alt="image.alt" />
          </picture>
        </div>
        <figcaption class="plate__caption"><slot name="caption" /></figcaption>
      </figure>
    </div>
  </section>
</template>
