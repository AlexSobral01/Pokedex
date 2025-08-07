"use client";

import { useContext } from "react";
import { PokemonContext } from "@/contexts/PokemonContext";
import { Pokemon } from "@/@types/pokemon";
import { typeColors } from "@/functions/getTypeClasses";

const AboutDetailsPokemonPage = () => {
  const pokemon = useContext(PokemonContext) as Pokemon;
  const typeIsAColor = pokemon.types?.[0]?.type?.name ?? "bg-blue-800";
  const typeColor = typeColors[typeIsAColor] ?? "bg-gray-500"

  if (!pokemon) {
    return (
      <div className="flex justify-center items-center min-h-[200px] text-white">
        Carregando informações do Pokémon...
      </div>
    );
  }

  return (
    <article className="bg-blue-900 p-6 rounded-3xl shadow-xl mx-auto">
      <ul className="flex flex-col text-xl gap-2">
        <li className="border-b-1 border-blue-800">ID: {pokemon.id}</li>
        <li className="border-b-1 border-blue-800">Name: <span style={{ color: `${typeColor}` }} className="font-bold">{pokemon.name}</span></li>
        <li className="border-b-1 border-blue-800">Height: {pokemon.height}</li>
        <li className="border-b-1 border-blue-800">weight: {pokemon.weight}</li>
        <li className="border-b-1 border-blue-800 flex gap-1">types: {pokemon.types?.map((types) => 
          <span style={{ backgroundColor: `${typeColors[types.type.name]}` }} className="font-bold px-2 rounded" key={types.slot}>{types.type.name}</span>)}
        </li>
      </ul>
    </article>
  );
};

export default AboutDetailsPokemonPage;
