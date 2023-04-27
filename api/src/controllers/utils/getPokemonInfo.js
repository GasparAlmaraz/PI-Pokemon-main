const axios = require("axios");

const getPokemonInfo = async (pokemon) => {
    const response = await axios.get(pokemon.url);
    const { id, name, sprites, types, stats } = response.data;
    const image = sprites.front_default;
    const type = types.map(type => type.type.name);
    const attack = stats[1].base_stat;

    return { id, name, image, type, attack };
}

module.exports = getPokemonInfo;