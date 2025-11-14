<template>
  <div @click="$emit('gain', xp)" class="grid-rows-3 bg-white shadow-lg rounded-xl p-4 border border-gray-200 hover:shadow-xl transition h-64 w-48 mr-4 flex flex-col" >
    
    <div class="mt-2 mx-2 h-full mb-2 flex items-center justify-center overflow-clip">
      <slot name="asset"></slot>
    </div>

    <!-- Flex-Push nach unten -->
    <div class="flex-grow flex flex-col justify-end"></div>

    <div class="border-b border-gray-300 mb-2"></div>

    <h2 class="text-xl font-bold text-black mb-2 leading-tight px-4">
      {{ title }}
    </h2>
    

    <p class="text-gray-600 text-sm line-clamp-2 overflow-hidden pb-4 px-4">{{ description }}</p>

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
  xp: {
    type: Number,
    required: false,
    default: 5
  }
})
</script>
