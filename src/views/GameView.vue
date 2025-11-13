<template>
  <div class="game">
    <p>Level: {{player.level}}</p>
    <p>XP: {{player.xp}}</p>
    <div class="flex flex-wrap m-60 space-x-4 justify-around">
      <Card title="Holzhacken" description="Hacke Holz" @gain="player.gainXp(20)"/>
      <Card title="Baumfällen" description="Fälle einen ganzen Baum" :xp=50 @gain="player.gainXp($event)"/>
      <Card title="Minen" description="Suche nach Erzen" :xp=75 @gain="player.gainXp($event)"/>
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/ActionCard.vue'

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
