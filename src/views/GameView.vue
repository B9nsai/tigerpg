<template>
  <div class="game">
    <p>Level: {{player.level}}</p>
    <p>XP: {{player.xp}}</p>
    <div class="flex flex-wrap m-60 space-x-4 justify-around h-64">
      <Card title="Holzhacken" description="Hacke Holz" :xp=20 :isEnabled=true @gain="player.gainXp($event)">
        <template #asset>
          <img src="../assets/logo.svg" class="h-full object-contain" />
        </template>
      </Card>
      <Card title="Baumfällen" description="Fälle einen ganzen Baum, trage ihn nach Hause und zeige ihn deinem Dorf - sonst glaubt dir sowieso niemand" :xp=50 @gain="player.gainXp($event)">
        <template #asset>
          <img src="../assets/logo.svg" class="h-full object-contain" />
        </template>
      </Card>
      <Card title="Minen" description="Suche nach Erzen" :xp=75 :isEnabled @gain="player.gainXp($event)">
        <template #asset>
          <img src="../assets/logo.svg" class="h-full object-contain" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/ActionCard.vue'

import { usePlayerStore } from '@/stores/PlayerStore';
const player = usePlayerStore()
</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
  }
} */
</style>
