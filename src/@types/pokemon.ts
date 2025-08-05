export interface Pokemon {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  types?: PokemonType[];
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

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface EachPokemon {
  name: string;
  url: string;
}