type PokemonSpeciesType = {
    flavor_text_entries: FlavorText[];
    evolves_from_species: string | null;
    generation: {
        name: "string";
    };
    evolution_chain: {
        url: string;
    }
};

type FlavorText = {
    flavor_text: string;
    language: string;
}