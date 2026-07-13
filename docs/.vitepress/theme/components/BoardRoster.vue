<script setup lang="ts">
defineProps<{
  groups: {
    title: string
    roles?: { role: string; name: string }[]
    members?: string[]
  }[]
}>()
</script>

<template>
  <div class="board">
    <div v-for="group in groups" :key="group.title" class="board__group">
      <h3 class="board__title">{{ group.title }}</h3>
      <dl v-if="group.roles" class="roster">
        <div v-for="entry in group.roles" :key="entry.role" class="roster__row">
          <dt>{{ entry.role }}</dt>
          <dd>{{ entry.name }}</dd>
        </div>
      </dl>
      <ul v-else class="roster roster--list">
        <li v-for="name in group.members" :key="name">{{ name }}</li>
      </ul>
    </div>
  </div>
</template>
