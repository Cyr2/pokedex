<template>
  <main class="min-h-screen flex gap justify-between gap-6 py-8 px-[10vw]" v-if="loaded">
    <div class="flex flex-col w-full gap-20">
      <SearchBar
        :handleSearch="handleSearch"
      />
      <PokemonsList
        :pokemons="pokemons"
        :search="search"
        :handleSelect="handleSelect"
      />
    </div>
    <div class="w-80 shrink-0 max-lg:hidden">
      <SelectedPokemon
        :selectedPokemon="selectedPokemon"
      />
    </div>
  </main>
  <div v-else class="w-screen h-screen flex items-center justify-center">
    <img src="/pokeball-icon.png" alt="Pokeball" class="animate-spin brightness-75 w-14">
  </div>
</template>

<script setup lang="ts">
import { pokemons, loaded } from '~/hooks/fetchPokemon';

const search = ref('');

const handleSearch = (value: string) => {
  search.value = value;
};

const selectedPokemon = ref(null);

const handleSelect = (pokemon: number) => {
  selectedPokemon.value = pokemon;
};
</script>