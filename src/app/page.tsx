import { NavBar } from "@/components/NavBar";
import { RenderPokemon } from "@/components/RenderPokemon";
import SearchPokemon from "@/components/SearchPokemon";

export default function Home() {
  return (
    <>
      <NavBar /> 
      <SearchPokemon />
      <RenderPokemon />
    </>
  );
}
