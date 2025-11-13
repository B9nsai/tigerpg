<template>
  <Card :title="player.name" :description="player.role">
    <p class="text-sm text-gray-500">Level: {{ player.level }}</p>
  </Card>
</template>

<script setup>
import Card from './Card.vue'

defineProps({
  player: {
    type: Object,
    required: true,
  },
})
</script>
