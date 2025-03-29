<script setup lang="ts"></script>

<template>
  <div>
    <img src="/src/images/superhero-group.png" alt="Superhero group" />
    <div class="flex flex-col items-center justify-center gap-2">
      <h1 class="text-4xl font-bold superhero-fonting text-shadow">Welcome to the Superhero Pentathlon!</h1>
      <p class="text-lg text-black superhero-fonting small-text-shadow">Discover who Superhero would win in a totally fair and not rigged competition!</p>
      <a href="/superhero-pentathlon" class="mt-4">
        <button
          class="bg-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out cursor-pointer hover:bg-[#fff66f] hover:!text-black hover:drop-shadow-none superhero-fonting small-text-shadow"
        >
          Let's do it!
        </button>
      </a>
    </div>
  </div>
</template>

<style scoped>
.superhero-fonting {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  @apply text-[#fff66f];
}
.text-shadow {
  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.9);
}
.small-text-shadow {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
}
</style>
