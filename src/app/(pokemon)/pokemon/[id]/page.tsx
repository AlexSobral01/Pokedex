import { pokemonApi } from "@/api/api";
import { PokemonType } from "@/types/pokemonType";
import { BackgroundByTypes, BorderAndShadowTypes } from "@/utils/stylesByTypes";

type Props = {
    params: Promise<{ id: string }>
}
const pokePage = async({ params }: Props) => {
    const { id } = await params;
    const pokemon:PokemonType = await pokemonApi(Number(id));
    const defaultTypes = pokemon.types[0]?.type.name ?? "normal";

    return (
        <>
        <main className="mt-20 mx-6">
            <section className={"flex shadow-md rounded-2xl overflow-hidden "+BorderAndShadowTypes[defaultTypes]}>
                <div className="relative">
                    <div className={BorderAndShadowTypes[defaultTypes] +" " + BackgroundByTypes[defaultTypes]+ " h-60 w-50 rounded-l-2xl rounded-r-full flex justify-center items-center "+ BorderAndShadowTypes}>
                        <img 
                            className="w-56 -mr-12"
                            src={pokemon.sprites?.versions?.["generation-v"]["black-white"].animated.front_default || undefined} alt={pokemon.name} 
                        />
                    </div>
                    <div className="bg-blue-950 absolute top-0 left-0 -z-10 h-full w-full"></div>
                </div>
                <div className="bg-blue-950 w-full pt-6 pl-6">
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
                        <li>Height: {pokemon.weight}</li>
                    </ul>
                </div>
            </section>
        </main>  
        </>
    )
}

export default pokePage;