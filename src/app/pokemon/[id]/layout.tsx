import { Pokemon } from "@/@types/pokemon";
import { PokemonProvider } from "@/components/PokemonProvider";
import { typeColors } from "@/functions/getTypeClasses";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const PokemonLayout = async({ children, params } : { children : React.ReactNode, params: Promise<{ id: string }> }) => {
try {
    const { id } = await params;

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon: Pokemon = response.data;
    const bgIsAColor = pokemon.types?.[0]?.type?.name ?? "bg-blue-800";
    const bgColor = typeColors[bgIsAColor] ?? "bg-gray-500"

    return (
      <div style={{ backgroundColor: bgColor }}>
        <nav className="pt-5 pl-2">
          <Link href={"/"}>
            <Image
              src={"/pokemon-png-logo.webp"}
              alt="Logo"
              width={100}
              height={40}
            />
          </Link>
        </nav>
        <div className="flex flex-col">
          <div className="flex justify-center h-40 rounded-t-2xl relative">
            <img
              className="absolute m-auto bottom-[-100px] h-60"
              src={pokemon.sprites?.front_default || "/fallback.png"}
              alt={pokemon.name}
            />
          </div>
          <div className="bg-blue-950 text-white rounded-3xl px-10 pt-24 pb-10 mx-10 mb-10">
            <nav className="flex flex-col md:flex-row justify-between pb-10">
              <Link href={`/pokemon/${id}`} className="text-xl hover:border-b-green-500 hover:border-b-2 cursor-pointer">About</Link>
              <Link href={`/pokemon/${id}/evolutions`} className="text-xl hover:border-b-green-500 hover:border-b-2 cursor-pointer">Evolutions</Link>
              <Link href={`/pokemon/${id}/baseStats`} className="text-xl hover:border-b-green-500 hover:border-b-2 cursor-pointer">Base Stats</Link>
            </nav>
            <PokemonProvider pokemon={pokemon}>
              {children}
            </PokemonProvider>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600">Pokémon não encontrado</h1>
          <p className="text-gray-400 mt-2">Verifique o ID ou tente novamente.</p>
          <Link href="/" className="mt-4 inline-block text-blue-400">
            Voltar para a Home
          </Link>
        </div>
      </div>
    );
  }
}

export default PokemonLayout;