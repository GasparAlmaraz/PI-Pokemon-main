import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const PUT_POKEMON = "PUT_POKEMON";
export const ADD_POKEMON = "ADD_POKEMON";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK"

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
    const response = await axios.get(`${URL_BASE}/pokemons/name?name=${name}`);
    const pokemon = response.data;
    if (pokemon.name) {
      dispatch({ type: ADD_POKEMON, payload: pokemon });
    } else {
      alert("No se encontró el pokemon");
    }
  }
}

export const clearPokemonDetail = () => {
  return {type: CLEAR_DETAIL};
}

export const filterPokeByType = (type) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}/pokemons`);
    const pokemons = response.data;
    const filteredPokemons = type === "all" ? pokemons : pokemons.filter(pokemon => pokemon.type.includes(type));
    dispatch({type: FILTER_BY_TYPE, payload: filteredPokemons});
  }
}

export const filterPokeByOrigin = (origin) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}/pokemons`);
    const pokemons = response.data;
    const filteredPokemons = origin === "database" ? 
    pokemons.filter(pokemon => isNaN(pokemon.id)) : pokemons.filter(pokemon => !isNaN(pokemon.id));
    dispatch({type: FILTER_BY_ORIGIN, payload: filteredPokemons});
  }
}

export const orderPokeByName = (order) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}/pokemons`);
    const pokemons = response.data;
    const orderedPokemons = order === "ascend" ?
    pokemons.sort((a,b)=>{
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    :
    pokemons.sort((a,b)=>{
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });

    dispatch({type:ORDER_BY_NAME, payload: orderedPokemons});
  }
}

export const orderPokeByAttack = (order) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}/pokemons`);
    const pokemons = response.data;
    const orderedPokemons = order === "ascend" ?
    pokemons.sort((a,b)=>{
      if (a.attack > b.attack) {
        return 1;
      }
      if (a.attack < b.attack) {
        return -1;
      }
      return 0;
    })
    :
    pokemons.sort((a,b)=>{
      if (a.attack < b.attack) {
        return 1;
      }
      if (a.attack > b.attack) {
        return -1;
      }
      return 0;
    });

    dispatch({type:ORDER_BY_NAME, payload: orderedPokemons});
  }
}