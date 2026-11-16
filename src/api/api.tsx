import { pokemonListItem } from "@/types/pokemonType";
import axios from "axios";

export const paginationApi = async ({offset}: {offset: number}) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    const results = response.data.results;

    const detailedPokemons = await Promise.all(
        results.map(async (pokemon: pokemonListItem) => {
            if (!pokemon.url) {
                throw new Error("Pokemon URL is missing");
            }
            const res = await axios.get(pokemon.url);
            return res.data;
        })
    );
    return detailedPokemons;
}

export const pokemonAoi = async () => {

}