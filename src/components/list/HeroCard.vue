<script setup lang="ts">
import type { Superhero } from '@domain/Superhero';

interface PropsModel {
  hero: Superhero;
}
defineProps<PropsModel>();
</script>

<template>
  <div :key="hero.id" class="flex flex-col items-center bg-black border-2 border-[#fff66f] shadow-md rounded-lg p-4 min-w-[160px] max-w-[160px]">
    <img v-if="hero.picture" :src="hero.picture" :alt="`${hero.name}-image`" class="w-32 h-32 object-cover rounded-full mb-4 bg-[#fff66f] border-2 border-[#fff66f]" />
    <img v-else src="/src/images/default-hero.png" :alt="`${hero.name}-image`" class="w-32 h-32 object-cover rounded-full mb-4 bg-[#fff66f] border-2 border-[#fff66f]" />
    <p class="text-lg font-semibold text-center text-[#fff66f] ellipsis-text" :title="hero.name">{{ hero.name }}</p>
  </div>
</template>

<style scoped>
img:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 1);
}

::-webkit-scrollbar-thumb {
  background-color: #fff66f;
  border-radius: 6px;
  border: 2px solid rgba(0, 0, 0, 1);
}

.scroll-container {
  scrollbar-color: #fff66f rgba(0, 0, 0, 1);
  scrollbar-width: thin;
}
</style>
