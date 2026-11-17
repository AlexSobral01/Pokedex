import { JSX } from "react/jsx-runtime";

export type PokemonType = {
    id: number;
    name: string;
    height: number;
    weight: number;
    moves: {
        map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
        move: MoveTypeSlots[];
    };
    sprites?: {
        front_default: string | null;
        versions?: {
            ["generation-v"]: {
                ["black-white"]: {
                    animated: {
                        front_default: string | null;
                    };
                };
            };
        };
    };
    types: PokemonTypeSlot[];
};;

export type PokemonTypeSlot = {
    slot: number;
    type: {
        name: string;
    };
};

export type MoveTypeSlots = {
    name: "string"
};


export type pokemonListItem = {
    name: string;
    url:string;
};