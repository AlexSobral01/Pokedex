"use client"

import { PokemonType } from "@/types/pokemonType";
import Link from "next/link";

export const RenderPokemon = ({detailedPokemons} : { detailedPokemons: PokemonType[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {detailedPokemons?.map((pokemon: PokemonType) => (
        <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
          <div className="text-center w-[200px] border-[1px] border-green-500 rounded-2xl flex flex-col itens-center p-[30px] m-[15px]">
            <img
              src={pokemon.sprites?.front_default ?? undefined}
              alt={pokemon.name}
            />
            <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
