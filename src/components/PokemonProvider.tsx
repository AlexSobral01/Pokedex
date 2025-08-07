"use client"

import { Pokemon } from "@/@types/pokemon"
import { PokemonContext } from "@/contexts/PokemonContext"
import React from "react"

export const PokemonProvider = ({ pokemon, children }: { pokemon: Pokemon, children: React.ReactNode }) => {
  return (
    <PokemonContext.Provider value={pokemon}>
      {children}
    </PokemonContext.Provider>
  )
}