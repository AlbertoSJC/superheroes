<script setup lang="ts">
import ButtonElement from './ButtonElement.vue';

interface LinkProps {
  url?: string;
  text: string;
  disabled?: boolean;
}
const { url = '#' } = defineProps<LinkProps>();
</script>

<template>
  <a :href="url" class="mt-4" :class="{ 'pointer-events-none': disabled }">
    <ButtonElement :text="text" :disabled="disabled" />
  </a>
</template>
