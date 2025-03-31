<script setup lang="ts">
import HeroesList from '../list/HeroesList.vue';
import HeroCreation from './HeroCreation.vue';
</script>

<template>
  <div class="flex justify-center items-center flex-row gap-6">
    <HeroCreation />
    <HeroesList />
  </div>
</template>
