export function getTypeClasses(type: string): string {
  const typeClasses: Record<string, string> = {
    fire: "bg-orange-500 text-white",
    water: "bg-blue-500 text-white",
    grass: "bg-green-500 text-white",
    electric: "bg-yellow-400 text-black",
    ice: "bg-cyan-300 text-black",
    fighting: "bg-red-700 text-white",
    poison: "bg-purple-500 text-white",
    ground: "bg-yellow-600 text-white",
    flying: "bg-indigo-300 text-black",
    psychic: "bg-pink-400 text-white",
    bug: "bg-lime-500 text-black",
    rock: "bg-yellow-800 text-white",
    ghost: "bg-purple-800 text-white",
    dragon: "bg-indigo-700 text-white",
    dark: "bg-gray-800 text-white",
    steel: "bg-gray-400 text-black",
    fairy: "bg-pink-300 text-black",
    normal: "bg-gray-300 text-black",
  };

  return typeClasses[type] ?? "bg-gray-200 text-black"; // padrão
}
