import axios from "axios";

export const paginationApi = async ({offset}: {offset: number}) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    const results = response.data.results;

    const detailedPokemons = await Promise.all(
        results.map(async (pokemon: any) => {
            const res = await axios.get(pokemon.url);
            return res.data;
        })
    );
    return detailedPokemons;
}

export const pokemonAoi = async () => {
    
}