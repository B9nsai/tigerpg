<template>
  <div class="game">
    <Card title="Card" description="Hier bin ich"/>
    <Card title="Card 2" description="Noch eine Card"/>
    <Card title="Card 3" description="Wow, noch eine"/>
  </div>
</template>

<script setup>
import Card from '@/components/Card.vue'
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
