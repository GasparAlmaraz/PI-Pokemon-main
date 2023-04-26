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
    if(Array.isArray(pokemon)){
      const pokeObject = pokemon[0]
      dispatch({type: ADD_POKEMON, payload: pokeObject});
    }else if (pokemon.name) {
      dispatch({ type: ADD_POKEMON, payload: pokemon });
    } else {
      alert("No se encontró el pokemon o estaba mal escrito");
    }
  }
}

export const clearPokemonDetail = () => {
  return {type: CLEAR_DETAIL};
}

export const filterPokeByType = (type) => {
  return function (dispatch, getState) {
    const allPokemons = getState().allPokemons;
    const filteredPokemons = type === "all" ? allPokemons : allPokemons.filter(pokemon => pokemon.type.includes(type));
    dispatch({type: FILTER_BY_TYPE, payload: filteredPokemons});
  }
}

export const filterPokeByOrigin = (origin) => {
  return async function (dispatch, getState) {
    const allPokemons = getState().allPokemons;
    const filteredPokemons = origin === "database" ? 
      allPokemons.filter(pokemon => isNaN(pokemon.id)) : allPokemons.filter(pokemon => !isNaN(pokemon.id));
    dispatch({type: FILTER_BY_ORIGIN, payload: filteredPokemons});
  }
}

export const orderPokeByName = (order) => {
  return async function (dispatch, getState) {
    const allPokemons = getState().allPokemons;
    const orderedPokemons = order === "ascend" ?
    allPokemons.sort((a,b)=>{
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    :
    order === "descend" ?
    allPokemons.sort((a,b)=>{
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    })
    :
    allPokemons;
    dispatch({type:ORDER_BY_NAME, payload: orderedPokemons});
  }
}

export const orderPokeByAttack = (order) => {
  return async function (dispatch, getState) {
    const allPokemons = getState().allPokemons;
    const orderedPokemons = order === "ascend" ?
    allPokemons.sort((a,b)=>{
      if (a.attack > b.attack) {
        return 1;
      }
      if (a.attack < b.attack) {
        return -1;
      }
      return 0;
    })
    :
    order === "descend" ?
    allPokemons.sort((a,b)=>{
      if (a.attack < b.attack) {
        return 1;
      }
      if (a.attack > b.attack) {
        return -1;
      }
      return 0;
    })
    :
    allPokemons;
    dispatch({type:ORDER_BY_NAME, payload: orderedPokemons});
  }
}

export const createPokemon = (pokemon) => {
  return async function () {
    try {
      const jsonPokemon = JSON.stringify(pokemon);
      await axios.post(`${URL_BASE}/pokemons`, jsonPokemon, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      alert("Fallo al cargar al pokemon" + error.message);
    }
  };
};