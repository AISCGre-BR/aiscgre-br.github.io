<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  event: {
    kicker: string
    title: string
    logo: string
    subtitle: string
    meta: { term: string; detail: string | string[] }[]
    cta: { text: string; url: string }
    image: { jpg: string; webp: string; alt: string }
  }
}>()
</script>

<template>
  <section class="event" id="evento" aria-labelledby="event-title">
    <div class="event__inner">
      <div class="event__text">
        <p class="event__kicker">{{ event.kicker }}</p>
        <h2 class="event__title" id="event-title"><img :src="withBase(event.logo)" :alt="event.title" width="1252" height="264" /></h2>
        <p class="event__subtitle">{{ event.subtitle }}</p>

        <dl class="event__meta">
          <div v-for="item in event.meta" :key="item.term">
            <dt>{{ item.term }}</dt>
            <dd v-if="Array.isArray(item.detail)">
              <span v-for="line in item.detail" :key="line" class="event__meta-line">{{ line }}</span>
            </dd>
            <dd v-else>{{ item.detail }}</dd>
          </div>
        </dl>

        <a class="event__cta" :href="event.cta.url" target="_blank" rel="noopener">{{ event.cta.text }}</a>
      </div>

      <figure class="event__figure">
        <div class="event__arch">
          <picture>
            <source :srcset="withBase(event.image.webp)" type="image/webp" />
            <img :src="withBase(event.image.jpg)" :alt="event.image.alt" loading="lazy" />
          </picture>
        </div>
      </figure>
    </div>
  </section>
</template>
