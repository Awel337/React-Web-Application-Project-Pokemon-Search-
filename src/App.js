import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPokemonData,
  setAbilityData,
  setCharacteristicData,
  setStatData,
  setTypeData,
  savePokemon,
  deletePokemon,
} from "./store";
import SearchBar from "./components/SearchBar";
import PokemonInfo from "./components/PokemonInfo";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const {
    pokemonData,
    abilityData,
    characteristicData,
    statData,
    typeData,
    savedPokemon,
  } = useSelector((state) => state.pokemon);

  const fetchData = async (query) => {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
      if (response.ok) {
        let data = await response.json();
        dispatch(setPokemonData(data));

        fetchAbility(data.abilities[0]?.ability.name);
        fetchCharacteristic(data.id);
        fetchStat(data.stats[0]?.stat.name);
        fetchType(data.types[0]?.type.name);
        return;
      }
    } catch (err) {
      console.error("Error fetching Pokémon:", err);
    }
  };

  const fetchAbility = async (name) => {
    if (!name) return;
    const response = await fetch(`https://pokeapi.co/api/v2/ability/${name}`);
    if (response.ok) {
      dispatch(setAbilityData(await response.json()));
    }
  };

  const fetchCharacteristic = async (id) => {
    if (!id) return;
    const response = await fetch(`https://pokeapi.co/api/v2/characteristic/${id}`);
    if (response.ok) {
      dispatch(setCharacteristicData(await response.json()));
    }
  };

  const fetchStat = async (name) => {
    if (!name) return;
    const response = await fetch(`https://pokeapi.co/api/v2/stat/${name}`);
    if (response.ok) {
      dispatch(setStatData(await response.json()));
    }
  };

  const fetchType = async (name) => {
    if (!name) return;
    const response = await fetch(`https://pokeapi.co/api/v2/type/${name}`);
    if (response.ok) {
      dispatch(setTypeData(await response.json()));
    }
  };

  return (
    <div className="container">
      <h1 className="text-center title">Pokémon Search</h1>
      <p className="text-center description">
        Search for your favorite Pokémon, abilities, characteristics, stats, and types!
      </p>
      <div className="search-container">
        <SearchBar onSearch={fetchData} />
      </div>

      <div className="row">
        {pokemonData && (
          <PokemonInfo 
            data={pokemonData}
            ability={abilityData}
            characteristic={characteristicData}
            stat={statData}
            type={typeData}
            onSave={() => dispatch(savePokemon())}
            onDelete={() => dispatch(deletePokemon(pokemonData.name))}
          />
        )}
      </div>

      <h2 className="text-center mt-4">Saved Pokémon</h2>
      <div className="row">
        {savedPokemon.map(pokemon => (
          <PokemonInfo 
            key={pokemon.name} 
            data={pokemon}
            onDelete={() => dispatch(deletePokemon(pokemon.name))}
            saved={true}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

