<script setup lang="ts">
const props = defineProps<{
  handleSearch: (value: string) => void
}>();

const search = ref('');

watch(() => search.value, (value) => {
  props.handleSearch(value);
});
</script>

<template>
  <input type="text" v-model="search" placeholder="Search your Pokemon" class="w-full text-lg p-4 rounded-2xl outline outline-2 outline-red-300 focus:outline-offset-2 focus:outline-red-400" />
</template>