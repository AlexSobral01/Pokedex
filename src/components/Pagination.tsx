"use client"

import { useEffect, useState } from "react";
import { RenderPokemon } from "./RenderPokemon"
import { paginationApi } from "@/api/api";
import { PokemonType } from "@/types/pokemonType";

export const Pagination = () => {
    const [offset, setOffSet] = useState(0);
    const [pokemons, setPokemons] = useState<PokemonType[]>([]); 

    useEffect(() => {
        const fetchPokemons = async() => {
            const data = await paginationApi({ offset });
            setPokemons(data);
        };

        fetchPokemons();
    }, [offset])

    return (
        <section>
            <RenderPokemon detailedPokemons={pokemons} />
            <div className="flex gap-10 justify-center my-10">
                <button className="bg-green-600 text-white hover:text-green-200 px-2 rounded-bl-md hover:bg-green-800 transition duration-300 ease-in-out" 
                    onClick={() => {
                        if (offset > 0) {
                            setOffSet(offset - 20)}}
                        }
                >Prev</button>
                <span>{offset / 20 + 1}</span>
                <button className="bg-green-600 text-white hover:text-green-200 px-2 rounded-tr-md hover:bg-green-800 transition duration-300 ease-in-out" 
                    onClick={() => {
                        if (offset < 1340) {
                            setOffSet(offset + 20)}
                        }
                    }
                >Next</button>
            </div>
        </section>
    )
}