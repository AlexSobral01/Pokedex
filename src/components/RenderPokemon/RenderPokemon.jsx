import axios from "axios";
import React, { useEffect, useState } from "react";

export default function RenderPokemon() {

  const [pokemons, setPokemons] = useState([])
  const [searchPokemon, setSearchPokemon] = useState('')
  const [filteredPokemons, setFilteredPokemons] = useState([])

  useEffect(() => { 
    const requests = [];
    for (let i = 1; i <= 100; i++) {
      requests.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }
    Promise.all(requests)
      .then(responses => setPokemons(responses.map(response => response.data)))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const filtered = pokemons.filter((pokemon) => {
    if (pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())) {
      return true;
    }
    if (pokemon.id.toString().includes(searchPokemon)) {
      return false
    }
    return false;
   });
    setFilteredPokemons(filtered);
  }, [searchPokemon, pokemons])

  if (pokemons.length === 0) {
    return <p style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center", padding: "200px" }}>Carregando...</p>;
  }

  return (
    <section>
      <div styles={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px", width: "100vw" }}>
        <input 
        style={{ display: "flex", margin: "70px auto",
        padding: "10px", 
        paddingLeft: "20px",
        borderRadius: "20px",
        minWidth: "270px", 
        outline: "none",
        border:"none",
         }}
        type="search" 
        placeholder="Pikachu" 
        value={searchPokemon}
        onChange={(e) => setSearchPokemon(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredPokemons.map((pokemon, key) => (
          <div key={key} >
            <div style={{ border: "1px solid green", width: "200px", display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", borderRadius: "15px", margin: "15px"  }}>
              <img src={pokemon['sprites']['versions']['generation-iv']['platinum']['front_default']} alt={pokemon.name}
              height={150}
              width={150}
              style={{ padding: "5px" }} />
              <p style={{ color: "white" }}>{pokemon.name}</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  )
}