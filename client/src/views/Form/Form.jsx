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

                <div>Tipo/Tipos:
                    <label>Normal</label>
                    <input type="checkbox" value="normal"></input>
                    <label>Fuego</label>
                    <input type="checkbox" value="fire"></input>
                    <label>Agua</label>
                    <input type="checkbox" value="water"></input>
                    <label>Planta</label>
                    <input type="checkbox" value="grass"></input>
                    <label>Electrico</label>
                    <input type="checkbox" value="electric"></input>
                    <label>Hielo</label>
                    <input type="checkbox" value="ice"></input>
                    <label>Pelea</label>
                    <input type="checkbox" value="fighting"></input>
                    <label>Veneno</label>
                    <input type="checkbox" value="poison"></input>
                    <label>Tierra</label>
                    <input type="checkbox" value="ground"></input>
                    <label>Vuelo</label>
                    <input type="checkbox" value="flying"></input>
                    <label>Psiquico</label>
                    <input type="checkbox" value="psychic"></input>
                    <label>Insecto</label>
                    <input type="checkbox" value="bug"></input>
                    <label>Roca</label>
                    <input type="checkbox" value="rock"></input>
                    <label>Fantasma</label>
                    <input type="checkbox" value="ghost"></input>
                    <label>Dragon</label>
                    <input type="checkbox" value="dragon"></input>
                    <label>Oscuro</label>
                    <input type="checkbox" value="dark"></input>
                    <label>Acero</label>
                    <input type="checkbox" value="steel"></input>
                    <label>Hada</label>
                    <input type="checkbox" value="fairy"></input>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form;