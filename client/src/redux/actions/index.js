import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const PUT_POKEMON = "PUT_POKEMON";
export const ADD_POKEMON = "ADD_POKEMON";

const URL_BASE = "http://localhost:3001";

export const getPokemons = () => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}/pokemons`);
    dispatch({ type: GET_POKEMONS, payload: response.data });
  };
};

export const getPokemonDetail = (detailId) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}/pokemons/${detailId}`);
    dispatch({ type: GET_POKEMON_DETAIL, payload: response.data });
  };
};

export const onSearchPokemon = (name) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`);
    const pokemon = response.data;
    if (pokemon.name) {
      dispatch({ type: ADD_POKEMON, payload: pokemon });
    } else {
      alert("No se encontró el pokemon");
    }
  }
}