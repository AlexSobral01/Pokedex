import { Pokemon } from "@/@types/pokemon";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const page = async({ params }: { params: { id: string } }) => {
  const { id } = params;
  const response = axios.get("https://pokeapi.co/api/v2/pokemon/" + id)
  const Pokemon: Pokemon = (await response).data;

  return (
    <div className="bg-green-600">
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
          <img className="absolute m-auto bottom-[-100] h-60" src={Pokemon.sprites?.front_default} alt="">{}</img>
        </div>
        <div className="bg-blue-950 rounded-t-3xl px-10 pt-24 mx-10">
          <nav className="flex justify-between">
            <p className="text-xl border-b-green-500 border-b-2 cursor-pointer">About</p>
            <p className="text-xl hover:border-b-green-500 hover:border-b-2 cursor-pointer">Evolutions</p>
            <p className="text-xl hover:border-b-green-500 hover:border-b-2 cursor-pointer">Base Stats</p>
          </nav>
        </div>
      </div>
    </div>
    )
}

export default page;