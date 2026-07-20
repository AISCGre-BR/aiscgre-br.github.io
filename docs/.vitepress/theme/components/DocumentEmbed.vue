<script setup lang="ts">
import { withBase } from 'vitepress'

const props = defineProps<{
  file: string
  title: string
  meta?: string
  cover?: { jpg: string; webp: string }
}>()

const href = withBase(props.file)
</script>

<template>
  <figure class="doc">
    <!-- Desktop: leitura embutida. -->
    <div class="doc__frame">
      <iframe
        class="doc__viewer"
        :src="`${href}#view=FitH`"
        :title="title"
        loading="lazy"
      ></iframe>
    </div>

    <!-- Mobile: capa real da primeira página, que abre o leitor nativo. -->
    <a class="doc__card" :href="href" target="_blank" rel="noopener">
      <span v-if="cover" class="doc__preview">
        <picture>
          <source :srcset="withBase(cover.webp)" type="image/webp" />
          <img :src="withBase(cover.jpg)" alt="" loading="lazy" />
        </picture>
      </span>
      <span class="doc__body">
        <span v-if="meta" class="doc__kicker">{{ meta }}</span>
        <span class="doc__title">{{ title }}</span>
        <span class="doc__open">Ler o documento</span>
      </span>
    </a>

    <figcaption class="doc__meta">
      <span v-if="meta" class="doc__info">{{ meta }}</span>
      <span class="doc__actions">
        <a class="cta doc__desktop-only" :href="href" target="_blank" rel="noopener">Abrir em nova aba</a>
        <a class="cta cta--ghost" :href="href" download>Baixar PDF</a>
      </span>
    </figcaption>
  </figure>
</template>
