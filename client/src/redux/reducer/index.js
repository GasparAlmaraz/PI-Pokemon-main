import { ADD_POKEMON, CLEAR_DETAIL, GET_POKEMONS, GET_POKEMON_DETAIL, FILTER_BY_TYPE, FILTER_BY_ORIGIN, ORDER_BY_NAME, ORDER_BY_ATTACK } from "../actions";

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
                allPokemons: [action.payload, ...state.allPokemons]
            }
        }
        case CLEAR_DETAIL: {
            return {
                ...state,
                pokemonDetail: {}
            }
        }
        case FILTER_BY_TYPE: {

            return {
                ...state,
                allPokemons: action.payload
            };
        }
        case FILTER_BY_ORIGIN: {
            return {
                ...state,
                allPokemons: action.payload
            }
        }
        case ORDER_BY_NAME: {
            return {
                ...state,
                allPokemons: action.payload
            }
        }
        case ORDER_BY_ATTACK: {
            return {
                ...state,
                allPokemons: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default rootReducer;