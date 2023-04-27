import { ADD_POKEMON, CLEAR_DETAIL, GET_POKEMONS, GET_POKEMON_DETAIL, FILTER_BY_TYPE, FILTER_BY_ORIGIN, ORDER_BY_NAME, ORDER_BY_ATTACK, CREATE_POKEMON } from "../actions";

const initialState = {
    allPokemons: [],
    pokemonDetail: {},
    lastPokemonCreated: {},
    filteredPokemons: [],
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

            const pokemon = action.payload;

            if (Array.isArray(pokemon)) {
                const addedPokemon = pokemon[0];
                return {
                    ...state,
                    allPokemons: [addedPokemon, ...state.allPokemons]
                }
            } else if (typeof (pokemon) === "object") {
                return {
                    ...state,
                    allPokemons: [pokemon, ...state.allPokemons]
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
            const allPokemons = state.allPokemons;

            const result = order === "ascend" ?
                allPokemons.sort((a, b) => {
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
                    allPokemons.sort((a, b) => {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                        return 0;
                    })
                    :
                    [];

            return {
                ...state,
                filteredPokemons: result
            }
        }
        case ORDER_BY_ATTACK: {
            const order = action.payload;
            const allPokemons = state.allPokemons;

            const result = order === "ascend" ?
                allPokemons.sort((a, b) => {
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
                    allPokemons.sort((a, b) => {
                        if (a.attack < b.attack) {
                            return 1;
                        }
                        if (a.attack > b.attack) {
                            return -1;
                        }
                        return 0;
                    })
                    :
                    [];

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
        default: {
            return state;
        }
    }
}

export default rootReducer;