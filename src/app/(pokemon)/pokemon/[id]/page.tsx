import { pokemonApi } from "@/api/api";
import { PokemonEvolution, PokemonSpeciesApi } from "@/api/pokemonSpeciesApi";
import { PokeballAnimation } from "@/components/PokeballAnimation";
import { RenderPokemon } from "@/components/RenderPokemon";
import { Evolves_to, PokemonEvolution as PokemonEvolutionType } from "@/types/pokemonEvolution";
import { PokemonType } from "@/types/pokemonType";
import { BackgroundByTypes, BorderAndShadowTypes } from "@/utils/stylesByTypes";

const pokePage = async({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const pokemon:PokemonType = await pokemonApi(id);
    const pokemonDescriptionApi:PokemonSpeciesType = await PokemonSpeciesApi(Number(id));

    const defaultTypes = pokemon.types[0]?.type.name ?? "normal";
    const pokemonDescription = pokemonDescriptionApi.flavor_text_entries[0].flavor_text.replace(/[\n\f\r]/g, " ");

    async function getEvolution( pokemon: Evolves_to, evolutions: PokemonType[] = []): Promise<PokemonType[]> {
        const pokemonDetailed: PokemonType = await pokemonApi(pokemon.species.name);
        evolutions.push(pokemonDetailed);

        const nextEvolutions = await Promise.all(pokemon.evolves_to.map((item) =>
            getEvolution(item, evolutions)
        ));
        return [pokemonDetailed, ...nextEvolutions.flat()];
    }

    const pokemonEvolution: PokemonEvolutionType = await PokemonEvolution(
        pokemonDescriptionApi.evolution_chain.url
    );

    const evolutions:PokemonType[] = await getEvolution(pokemonEvolution.chain);

    return (
        <>
        <main className="mt-20 mx-6">
            <section className={"md:flex shadow-md rounded-2xl overflow-hidden "+BorderAndShadowTypes[defaultTypes]}>
                <div className="relative">
                    <div className={BorderAndShadowTypes[defaultTypes] +" " + BackgroundByTypes[defaultTypes]+ " relative h-60 md:w-50 rounded-t-2xl rounded-b-full md:rounded-l-2xl md:rounded-r-full flex justify-center items-center "+ BorderAndShadowTypes}>
                        <div className="absolute top-15 z-10 opacity-80">
                            <PokeballAnimation />
                        </div>
                        <img 
                            className="w-56 max-h-56 animate-[pokemon-appear_4.50s_ease-out_forwards]"
                            src={pokemon.sprites?.versions?.["generation-v"]["black-white"].animated.front_default || pokemon.sprites?.front_default || undefined} alt={pokemon.name} 
                        />
                    </div>
                    <div className="bg-gray-200 dark:bg-blue-950 absolute top-0 left-0 -z-10 h-full w-full"></div>
                </div>
                <div className="bg-gray-200 dark:bg-blue-950 w-full py-6 pl-6">
                    <div className="flex justify-between border-b-1 py-2 mb-2">
                        <h1> ID: {pokemon.id}</h1>
                        <span>
                            {pokemon.types.map((item) => (
                            <span className={"mr-2 py-0.5 px-3 rounded "+BackgroundByTypes[item.type.name]} key={item.slot}>{item.type.name}</span>
                        ))}</span>
                    </div>
                    <ul className="text-lg">
                        <li>Name: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
                        <li>Height: {pokemon.height}</li>
                        <li>Weight: {pokemon.weight}</li>
                        <li>Generation: Generation {
                            pokemonDescriptionApi.generation.name
                            .split("-")
                            .pop()
                            ?.toUpperCase()
                        }</li>
                    </ul>
                </div>
            </section>
            <section className="mt-10 p-6 bg-gray-200 dark:bg-blue-950 rounded-2xl overflow-hidden">
                <div>
                    <h3 className="font-bold text-xl pb-2">Description</h3>
                    <p>{pokemonDescription} </p>
                    <h3 className="font-bold text-xl mt-4 pb-2">Evoluções</h3>
                    <RenderPokemon detailedPokemons={evolutions} />
                </div>
            </section>
        </main>  
        </>
    )
}

export default pokePage;
