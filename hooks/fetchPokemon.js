const pokemons = ref([]);

const loaded = ref(false);

getAllNames();

/**fetch pokemon name and id */
async function getAllNames() {
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
    let response = await fetch(url);
    let responseAsJson = await response.json();

    for (let i = 0; i < responseAsJson.results.length; i++) {
        pokemons.value.push({
            id: i + 1,
            name: responseAsJson.results[i].name,
            types: []
        });
    }

    getAllTypes();
}

/**fetch pokemon types */
async function getAllTypes() {
    for (let i = 0; i < 18; i++) {
        let url = 'https://pokeapi.co/api/v2/type/' + (i + 1)
        let response = await fetch(url)
        let responseAsJson = await response.json()

        const pokemonInType = responseAsJson.pokemon
        
        for(let j = 0; j < pokemonInType.length; j++) {
            const pokemonId = pokemonInType[j].pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
            if(pokemonId <= pokemons.value.length && pokemons.value[pokemonId - 1]) {
                pokemons.value[pokemonId - 1].types.push(responseAsJson.name);
            }
        }
    }

    loaded.value = true;
}

export { pokemons, loaded };