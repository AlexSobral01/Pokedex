import { Pokemon } from "@/@types/pokemon";
import { getTypeClasses } from "@/functions/getTypeClasses";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const PokemonPage = async ({ params }: { params: { id: string } }) => {
  try {
    const resolvedParams = await Promise.resolve(params)
    const id = Number(resolvedParams.id)

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon: Pokemon = response.data;
    const bgIsAColor = pokemon.types?.[0]?.type?.name ?? "bg-blue-800";

    return (
      <div className={getTypeClasses(bgIsAColor)}>
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
          <div className="bg-blue-950 text-white rounded-t-3xl px-10 pt-24 mx-10">
            <nav className="flex justify-between">
              <p className="text-xl border-b-green-500 border-b-2 cursor-pointer">About</p>
              <p className="text-xl hover:border-b-green-500 hover:border-b-2 cursor-pointer">Evolutions</p>
              <p className="text-xl hover:border-b-green-500 hover:border-b-2 cursor-pointer">Base Stats</p>
            </nav>
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
};

export default PokemonPage;
