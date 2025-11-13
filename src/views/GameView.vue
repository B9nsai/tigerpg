<template>
  <div class="game">
    <p>Level: {{player.level}}</p>
    <p>XP: {{player.xp}}</p>
    <Card title="Holzhacken" description="Hacke Holz" @gain="player.gainXp(20)"/>
    <Card title="Baunfällen" description="Fälle einen ganzen Baum" @gain="player.gainXp(50)"/>
  </div>
</template>

<script setup>
import Card from '@/components/Card.vue'

import { usePlayerStore } from '@/stores/PlayerStore';
const player = usePlayerStore()
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
