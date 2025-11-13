<template>
  <div class="bg-white shadow-lg rounded-xl p-4 border border-gray-200 hover:shadow-xl transition h-64 w-48" @click="$emit('gain')" >
    <h2 class="text-xl font-bold text-black mb-2">{{ title }}</h2>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <!-- <button @click="player.gainXp(20) "class="text-gray-600 mb-4">{{ description }}</button> -->
    <slot /> <!-- optionaler Inhalt, wenn Kinder mehr einfügen wollen -->
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: '',
  },
})
</script>
