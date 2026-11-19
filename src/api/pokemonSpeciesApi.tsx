import axios from "axios";

export const PokemonSpeciesApi = async (id: number) => {
    const pokemonSpecies = await axios(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    return pokemonSpecies.data;
};

export const PokemonEvolution = async(url: string) => {
    const pokemonEvolution = await axios(url);
    return pokemonEvolution.data;
};
