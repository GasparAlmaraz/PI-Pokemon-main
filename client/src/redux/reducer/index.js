import { ADD_POKEMON, GET_POKEMONS, GET_POKEMON_DETAIL } from "../actions";

const initialState = {
    allPokemons: [],
    pokemonDetail: {}
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS: {
            return {
                ...state,
                allPokemons: action.payload
            }
        }
        case GET_POKEMON_DETAIL: {
            return {
                ...state,
                pokemonDetail: action.payload
            }
        }
        case ADD_POKEMON: {
            return {
                ...state,
                allPokemons: [action.payload ,...state.allPokemons]
            }
        }
        default: {
            return state;
        }
    }
}

export default rootReducer;