<script setup lang="ts">
import SuperheroWelcome from '@components/home/SuperheroWelcome.vue';
import { fetchApiKeyDetails } from '@stores/services/apiService';
import { ENV_VARIABLE } from 'src/env';
import { onMounted } from 'vue';

onMounted(async () => {
  await fetchApiKeyDetails(ENV_VARIABLE.PUBLIC_SUPERHERO_API_KEY)
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

<style scoped>
.comic-background {
  background-image: url('/src/images/comic-background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
