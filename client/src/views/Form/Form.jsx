const Form = () => {
    return (
        <div>
            <h2>Crea tu pokemon!</h2>
            <form>
                <label>Nombre:
                    <input type="text" name="PokemonName"></input>
                </label>

                <label>Imagen:
                    <input type="text" name="PokemonImage"></input>
                </label>

                <label>Vida:
                    <input type="text" name="PokemonHP"></input>
                </label>

                <label>Ataque:
                    <input type="number" name="PokemonAttack"></input>
                </label>

                <label>Defensa:
                    <input type="number" name="PokemonDefense"></input>
                </label>

                <label>Velocidad:
                    <input type="number" name="PokemonSpeed"></input>
                </label>

                <label>Altura:
                    <input type="number" name="PokemonHeight"></input>
                </label>

                <label>Peso:
                    <input type="number" name="PokemonWeight"></input>
                </label>

                <label>Tipo/Tipos:
                    <select multiple >
                        <option value="normal">Normal</option>
                        <option value="fire">Fire</option>
                        <option value="water">Water</option>
                        <option value="grass">Grass</option>
                        <option value="electric">Electric</option>
                        <option value="ice">Ice</option>
                        <option value="fighting">Fighting</option>
                        <option value="poison">Poison</option>
                        <option value="ground">Ground</option>
                        <option value="flying">Flying</option>
                        <option value="psychic">Psychic</option>
                        <option value="bug">Bug</option>
                        <option value="rock">Rock</option>
                        <option value="ghost">Ghost</option>
                        <option value="dragon">Dragon</option>
                        <option value="dark">Dark</option>
                        <option value="steel">Steel</option>
                        <option value="fairy">Fairy</option>
                    </select>
                </label>

            </form>
        </div>
    )
}

export default Form;