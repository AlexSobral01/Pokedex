import axios from "axios";
import Link from "next/link";

export const RenderPokemon = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
  const results = response.data.results;

  const detailedPokemons = await Promise.all(
    results.map(async (pokemon: any) => {
      const res = await axios.get(pokemon.url);
      return res.data;
    })
  );

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {detailedPokemons?.map((pokemon: any) => (
        <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
          <div className="text-center w-[200px] border-[1px] border-green-500 rounded-2xl flex flex-col itens-center p-[30px] m-[15px]">
            <img
              src={pokemon.sprites.versions['generation-iv'].platinum.front_default}
              alt={pokemon.name}
            />
            <p className="text-white">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
