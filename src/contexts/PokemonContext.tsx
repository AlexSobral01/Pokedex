"use client"

import { Pokemon } from "@/@types/pokemon";
import { createContext } from "react";

export const PokemonContext = createContext<Pokemon | null>(null);