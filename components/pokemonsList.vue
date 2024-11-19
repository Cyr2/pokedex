<script setup lang="ts">
const props = defineProps<{
  pokemons: [],
  search: string,
  handleSelect: (value: number) => void
}>();

const pokemons = ref(props.pokemons);

const filtredPokemons = computed(() => {
  return pokemons.value.filter((pokemon) => {
    return pokemon.name.includes(props.search);
  });
});
</script>

<template>
  <ul class="flex flex-wrap gap-6 gap-y-20">
    <li v-for="pokemon in filtredPokemons" :key="pokemon.id" @click="props.handleSelect(pokemon.id)" class="bg-white relative flex flex-col items-center font-bold p-6 pt-10 rounded-2xl shadow-xl cursor-pointer min-w-[23%] flex-[0.5] duration-[100ms] group hover:outline outline-2 outline-gray-300">
      <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`" :alt="pokemon.name" class="absolute max-w-24 top-0 left-1/2 -translate-x-1/2 -translate-y-14 duration-[100ms] group-hover:scale-110">
      <p class="text-xs text-gray-500">N°{{ pokemon.id }}</p>
      <h3 class="text-lg first-letter:uppercase">
        {{ pokemon.name }}
      </h3>
      <ul class="flex gap-2 mt-3">
        <li v-for="type in pokemon.types" class="py-1 px-2 rounded-md bg-normal">
          <p class="first-letter:uppercase text-sm text-gray-600">{{ type }}</p>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
  img {
    image-rendering: pixelated;
  }
</style>