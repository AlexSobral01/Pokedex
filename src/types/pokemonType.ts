import { JSX } from "react/jsx-runtime";

export type PokemonType = {
    map(arg0: (pokemon: PokemonType) => JSX.Element): import("react").ReactNode;
    id: number;
    name: string;
    sprites?: {     
        front_default: string | null;
    }
}


export type pokemonListItem = {
    name: string;
    url:string;
}