import { EachPokemon, Pokemon } from "@/@types/pokemon";
import axios from "axios";
import Link from "next/link";

export const RenderPokemon = async () => {
  let detailedPokemons: Pokemon[] = [];

  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
    const results: EachPokemon[] = response.data.results;

    const settledResults = await Promise.allSettled(
      results.map(async (pokemon: EachPokemon) => {
        const res = await axios.get(pokemon.url);
        return res.data;
      })
    );
    detailedPokemons = settledResults
      .filter((result): result is PromiseFulfilledResult<Pokemon> => result.status === "fulfilled")
      .map((result) => result.value);

  } catch (error) {
    console.error("Erro ao carregar lista de Pokémon:", error);
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {detailedPokemons?.map((pokemon: Pokemon) => (
        <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
          <div className="text-center w-[200px] border-[1px] border-green-500 rounded-2xl flex flex-col itens-center p-[30px] m-[15px]">
            <img
              src={pokemon.sprites?.versions?.["generation-iv"]?.platinum?.front_default}
              alt={pokemon.name}
            />
            <p className="text-white">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default RenderPokemon;