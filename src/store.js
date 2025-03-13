import { configureStore, createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonData: null,
    abilityData: null,
    characteristicData: null,
    statData: null,
    typeData: null,
    savedPokemon: [],
  },
  reducers: {
    setPokemonData: (state, action) => {
      state.pokemonData = action.payload;
    },
    setAbilityData: (state, action) => {
      state.abilityData = action.payload;
    },
    setCharacteristicData: (state, action) => {
      state.characteristicData = action.payload;
    },
    setStatData: (state, action) => {
      state.statData = action.payload;
    },
    setTypeData: (state, action) => {
      state.typeData = action.payload;
    },
    savePokemon: (state) => {
      if (
        state.pokemonData &&
        !state.savedPokemon.some((p) => p.name === state.pokemonData.name)
      ) {
        state.savedPokemon.push(state.pokemonData);
      }
    },
    deletePokemon: (state, action) => {
      state.savedPokemon = state.savedPokemon.filter(
        (p) => p.name !== action.payload
      );
    },
  },
});

export const {
  setPokemonData,
  setAbilityData,
  setCharacteristicData,
  setStatData,
  setTypeData,
  savePokemon,
  deletePokemon,
} = pokemonSlice.actions;

export default configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
});
