<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  congress: {
    kicker: string
    title: string
    motto: string
    meta: { term: string; detail: string }[]
    cta: { text: string; url: string }
    speaker: {
      image: { jpg: string; webp: string; alt: string }
      label: string
      name: string
      role: string
    }
  }
}>()
</script>

<template>
  <section class="congress" id="congresso" aria-labelledby="congress-title">
    <div class="congress__inner">
      <div class="congress__text">
        <p class="congress__kicker">{{ congress.kicker }}</p>
        <h2 class="congress__title" id="congress-title">{{ congress.title }}</h2>
        <p class="congress__motto"><em>{{ congress.motto }}</em></p>

        <dl class="congress__meta">
          <div v-for="item in congress.meta" :key="item.term">
            <dt>{{ item.term }}</dt>
            <dd>{{ item.detail }}</dd>
          </div>
        </dl>

        <a class="congress__cta" :href="congress.cta.url" target="_blank" rel="noopener">{{ congress.cta.text }}</a>
      </div>

      <figure class="congress__speaker">
        <div class="congress__portrait">
          <picture>
            <source :srcset="withBase(congress.speaker.image.webp)" type="image/webp" />
            <img :src="withBase(congress.speaker.image.jpg)" :alt="congress.speaker.image.alt" loading="lazy" />
          </picture>
        </div>
        <figcaption>
          <span class="congress__speaker-label">{{ congress.speaker.label }}</span>
          <strong>{{ congress.speaker.name }}</strong>
          {{ congress.speaker.role }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>
