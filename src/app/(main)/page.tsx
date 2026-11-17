import { Pagination } from "@/components/Pagination";
import SearchPokemon from "@/components/SearchPokemon";

export default function Home() {
  return (
    <>
      <SearchPokemon />
      <Pagination />
    </>
  );
}
