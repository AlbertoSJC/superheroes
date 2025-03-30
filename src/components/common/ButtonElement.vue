<script setup lang="ts">
interface ButtonProps {
  url?: string;
  text: string;
  disabled?: boolean;
}
const { url = '#' } = defineProps<ButtonProps>();
</script>

<template>
  <a :href="url" class="mt-4" :class="{ 'pointer-events-none': disabled }">
    <button
      class="bg-black font-bold py-2 px-4 transition duration-300 ease-in-out cursor-pointer hover:bg-[#fff66f] hover:!text-black hover:drop-shadow-none rounded-[10px] min-w-[180px]"
      :class="{ '!bg-[#535353] !text-black': disabled, 'superhero-fonting small-text-shadow': !disabled }"
    >
      {{ text }}
    </button>
  </a>
</template>
