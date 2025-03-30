<script setup lang="ts">
import { useSuperheroesStore } from '@stores/superheroes';
import { resizeImage } from 'src/utils/images';

const superheroesStore = useSuperheroesStore();

const handleImageErrors = (error: string) => {
  superheroesStore.imageUploadingError = error;
};

const handleImageUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];

  if (!file) {
    handleImageErrors('No file selected.');
    return;
  }

  if (!file.type.startsWith('image/')) {
    handleImageErrors('Please select a valid image file.');
    return;
  }

  try {
    const resizedBase64 = await resizeImage(file, 128, 128);
    superheroesStore.heroToUpload.picture = resizedBase64;
    superheroesStore.imageUploadingError = null;
  } catch (error) {
    handleImageErrors('Failed to process the image.');
  }
};
</script>

<template>
  <div class="flex flex-col items-center gap-4 min-w-[367px]">
    <div class="flex flex-row-reverse gap-16 w-full items-center justify-center">
      <div v-if="superheroesStore.heroToUpload.picture" class="mt-4 flex flex-col items-center">
        <p class="text-lg font-semibold">Hero Image Selected</p>
        <img :src="superheroesStore.heroToUpload.picture" alt="Resized Image" class="border rounded" />
      </div>

      <label for="file-input" class="bg-[#fff66f] text-black font-bold py-2 px-4 rounded cursor-pointer hover:bg-[#ffcb00] transition">
        {{ superheroesStore.heroToUpload.picture ? 'Change Image' : 'Choose Image' }}
      </label>
      <input id="file-input" type="file" accept="image/*" @change="handleImageUpload" class="hidden" />
    </div>

    <p v-if="superheroesStore.imageUploadingError" class="text-red-500">{{ superheroesStore.imageUploadingError }}</p>
  </div>
</template>

<style scoped>
input[type='file'] {
  cursor: pointer;
}
img {
  width: 128px;
  height: 128px;
}
</style>
