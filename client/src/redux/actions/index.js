import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const PUT_POKEMON = "PUT_POKEMON";
export const ADD_POKEMON = "ADD_POKEMON";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const CLEAR_FILTER = "CLEAR_FILTER";

const URL_BASE = "http://localhost:3001";


export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/pokemons`);
      dispatch({ type: GET_POKEMONS, payload: response.data });
    } catch (error) {
      alert("Fallo al cargar la lista de pokemones: " + error.message);
    }
  };
};

export const getPokemonDetail = (detailId) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/pokemons/${detailId}`);
      dispatch({ type: GET_POKEMON_DETAIL, payload: response.data });
    } catch (error) {
      alert("Fallo al cargar los detalles del pokemon:" + error.message);
    }
  };
};

export const onSearchPokemon = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/pokemons/name?name=${name}`);
      const pokemon = response.data;
      dispatch({type: ADD_POKEMON, payload: pokemon});
    } catch (error) {
      console.log(error.message);
    }
  }
}

export const clearPokemonDetail = () => {
  return { type: CLEAR_DETAIL };
}

export const filterPokeByType = (type) => {
  return { type: FILTER_BY_TYPE, payload: type }
}

export const filterPokeByOrigin = (origin) => {
  return { type: FILTER_BY_ORIGIN, payload: origin };
}

export const orderPokeByName = (order) => {
  return { type: ORDER_BY_NAME, payload: order };
  
}

export const orderPokeByAttack = (order) => {
  return { type: ORDER_BY_ATTACK, payload: order };
  
}

export const createPokemon = (pokemon) => {
  return async function () {
    try {
      const jsonPokemon = JSON.stringify(pokemon);
      await axios.post(`/pokemons`, jsonPokemon, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      alert("Fallo al cargar al pokemon: " + error.message);
    }
  };
};

export const clearFilter = () => {
  return {type: CLEAR_FILTER}
}