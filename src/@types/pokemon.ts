export interface Pokemon {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  types?: PokemonTypes[];
  sprites?: PokemonSprites;
}

interface PokemonSprites {
  front_default?: string;
  back_default?: string;
  versions?: {
    ['generation-iv']?: {
      platinum?: {
        front_default?: string;
      }
    };
  };
}

interface PokemonTypes {
  slot: number;
  types: {
    name: string;
  }
}

export interface EachPokemon {
  name: string;
  url: string;
}