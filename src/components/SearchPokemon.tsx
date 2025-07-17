"use client"

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const SearchPokemon = () => {
  const [allPokemon, setAllPokemon] = useState<any[]>([]);
  const [getPokemon, setGetPokemon] = useState("");
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const requests = [];
        for (let i = 1; i <= 100; i++) {
          requests.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
        }
        const responses = await Promise.all(requests);
        setAllPokemon(responses);
      } catch (err) {
        console.error("Erro ao buscar pokémons", err);
      }
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
    if (!getPokemon) {
      setPokemons([]);
      return;
    }
    const filtered = allPokemon.filter((pokemon: any) =>
      pokemon.data.name.toLowerCase().includes(getPokemon.toLowerCase())
    );
    setPokemons(filtered);
  }, [getPokemon, allPokemon]);

  return (
    <div className="flex flex-col items-center p-6">
      <input
        className="my-4 p-2.5 outline-none border-none rounded-3xl bg-white text-black min-w-[270px] px-4"
        type="text"
        placeholder="Pikachu"
        onChange={(e) => setGetPokemon(e.target.value)}
      />
      {pokemons.length > 0 && (
        <ul className="bg-[#141f39] min-w-[270px] rounded-xl p-2">
          {pokemons.map((pokemon: any) => (
            <Link key={pokemon.data.id} href={`/pokemon/${pokemon.data.id}`}>
              <li>
                {pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1)}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPokemon;