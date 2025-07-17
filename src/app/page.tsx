import { NavBar } from "@/components/NavBar";
import { RenderPokemon } from "@/components/RenderPokemon";
import SearchPokemon from "@/components/SearchPokemon";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <NavBar /> 
      <SearchPokemon />
      <Suspense fallback={<p className="text-center mt-10 mx-auto">carregando pokemons...</p>}>
        <RenderPokemon />
      </Suspense>
    </>
  );
}
