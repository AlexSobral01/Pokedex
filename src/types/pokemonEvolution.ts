export type PokemonEvolution = {
    chain: Evolves_to;
}

export type Evolves_to = {
    species: {
        name: string;
        url: string;
    };
    evolves_to: Evolves_to[];
}