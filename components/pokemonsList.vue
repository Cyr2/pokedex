<script setup lang="ts">
import { pokemons, loaded } from '~/hooks/fetchPokemon';

const props = defineProps<{
  search: string,
  handleSelect: (value: number) => void
}>();

const filtredPokemons = computed(() => {
  return pokemons.value.filter((pokemon) => {
    return pokemon.name.includes(props.search);
  });
});
</script>

<template>
  <ul class="flex flex-wrap gap-6" v-if="loaded">
    <li v-for="pokemon in filtredPokemons" :key="pokemon.id" @click="props.handleSelect(pokemon.id)" class="bg-white relative flex flex-col p-4 pt-14 cursor-pointer group">
      <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`" :alt="pokemon.name" class="absolute max-w-24 top-0 left-1/2 -translate-x-1/2 -translate-y-14 group-hover:scale-110">
      <p>N°{{ pokemon.id }}</p>
      <h3>
        {{ pokemon.name }}
      </h3>
      <ul class="flex gap-2">
        <li v-for="type in pokemon.types">
          <p>{{ type }}</p>
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