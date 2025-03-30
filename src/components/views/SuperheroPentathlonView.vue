<script setup lang="ts">
import { ENV_VARIABLE } from 'src/env';
import apiService from 'src/services/apiService';
import { onMounted } from 'vue';

onMounted(async () => {
  await apiService
    .fetchSuperHeroesList()
    .then((response) => {
      console.log('API Key Details:', response);
    })
    .catch((error) => {
      console.error('Error fetching API key details:', error);
    });
});
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center comic-background">lalala</div>
</template>
