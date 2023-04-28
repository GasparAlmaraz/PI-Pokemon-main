import { ADD_POKEMON, CLEAR_DETAIL, GET_POKEMONS, GET_POKEMON_DETAIL, FILTER_BY_TYPE, FILTER_BY_ORIGIN, ORDER_BY_NAME, ORDER_BY_ATTACK, CREATE_POKEMON, CLEAR_FILTER } from "../actions";

const initialState = {
    allPokemons: [],
    isLoaded: false,
    pokemonDetail: {},
    lastPokemonCreated: {},
    filteredPokemons: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_POKEMONS: {

            return {
                ...state,
                allPokemons: action.payload,
                isLoaded: true,
            }
        }
        case GET_POKEMON_DETAIL: {
            return {
                ...state,
                pokemonDetail: action.payload
            }
        }
        case ADD_POKEMON: {

            const pokemon = action.payload;

            if (Array.isArray(pokemon)) {
                const addedPokemon = pokemon[0];
                return {
                    ...state,
                    allPokemons: [addedPokemon, ...state.allPokemons],

                }
            } else if (typeof (pokemon) === "object") {
                return {
                    ...state,
                    allPokemons: [pokemon, ...state.allPokemons],

                }
            }

            return state;
        }
        case CLEAR_DETAIL: {
            return {
                ...state,
                pokemonDetail: {}
            }
        }
        case FILTER_BY_TYPE: {

            const type = action.payload;
            const allPokemons = state.allPokemons;

            if (type !== "all" && type !== "none") {
                return {
                    ...state,
                    filteredPokemons: allPokemons.filter(pokemon => pokemon.type.includes(type))
                }
            } else {
                return {
                    ...state,
                    filteredPokemons: []
                }
            }
        }
        case FILTER_BY_ORIGIN: {

            const origin = action.payload;
            const allPokemons = state.allPokemons;

            if (origin === "database") {
                return {
                    ...state,
                    filteredPokemons: allPokemons.filter(pokemon => isNaN(pokemon.id))
                }
            } else if (origin === "api") {
                return {
                    ...state,
                    filteredPokemons: allPokemons.filter(pokemon => !isNaN(pokemon.id))
                }
            } else {
                return {
                    ...state,
                    filteredPokemons: []
                }
            }
        }
        case ORDER_BY_NAME: {
            const order = action.payload;
            const allPokemons = [...state.allPokemons];
            const filteredPokemons = [...state.filteredPokemons];

            let result = [];

            if (order === "ascend") {
                result = filteredPokemons.length > 0 ?
                    filteredPokemons.sort((a, b) => a.name.localeCompare(b.name)) :
                    allPokemons.sort((a, b) => a.name.localeCompare(b.name));
            } else if (order === "descend") {
                result = filteredPokemons.length > 0 ?
                    filteredPokemons.sort((a, b) => b.name.localeCompare(a.name)) :
                    allPokemons.sort((a, b) => b.name.localeCompare(a.name));
            } else {
                result = [];
            }
            return {
                ...state,
                filteredPokemons: result
            }
        }

        case ORDER_BY_ATTACK: {
            const order = action.payload;
            const allPokemons = [...state.allPokemons];
            const filteredPokemons = [...state.filteredPokemons];

            let result = [];

            if (order === "ascend") {
                result = filteredPokemons.length > 0 ?
                    filteredPokemons.sort((a, b) => a.attack - b.attack) :
                    allPokemons.sort((a, b) => a.attack - b.attack);
            } else if (order === "descend") {
                result = filteredPokemons.length > 0 ?
                    filteredPokemons.sort((a, b) => b.attack - a.attack) :
                    allPokemons.sort((a, b) => b.attack - a.attack);
            } else {
                result = [];
            }

            return {
                ...state,
                filteredPokemons: result
            }
        }
        case CREATE_POKEMON: {
            return {
                ...state,
                lastPokemonCreated: action.payload
            }
        }
        case CLEAR_FILTER : {
            return {
                ...state,
                filteredPokemons: []
            }
        }
        default: {
            return state;
        }
    }
}

export default rootReducer;