<template>
  <main class="min-h-screen flex gap justify-between gap-8 py-8 px-[10vw]">
    <div class="flex flex-col w-full">
      <p>{{ search }}</p>
      <SearchBar
        :handleSearch="handleSearch"
      />
      <PokemonsList
        :search="search"
        :handleSelect="handleSelect"
      />
    </div>
    <div class="w-80">
      <SelectedPokemon
        :selectedPokemon="selectedPokemon"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
const search = ref('');

const handleSearch = (value: string) => {
  search.value = value;
};

const selectedPokemon = ref(null);

const handleSelect = (pokemon: number) => {
  selectedPokemon.value = pokemon;
};
</script>