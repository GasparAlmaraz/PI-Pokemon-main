import { useEffect, useState } from "react";
import axios from "axios";

import "./form.styles.css";


const Form = () => {

    const [types, setTypes] = useState([]);

    async function getTypes() {
        const response = await axios.get(`http://localhost:3001/types`);
        setTypes(response.data);
    }

    useEffect(() => {
        getTypes();
    }, [])

    return (
        <div className="form-container">
            <h2>Crea tu pokemon!</h2>
            <br/>
            <form>
                <label>
                    Nombre:
                    <input type="text" name="PokemonName"></input>

                    <br/>
                    Imagen (debe ser un URL):
                    <input type="text" name="PokemonImage"></input>
                    <br/>

                    Vida:
                    <input type="text" name="PokemonHP"></input>
                    <br/>

                    Ataque:
                    <input type="text" name="PokemonAttack"></input>
                    <br/>

                    Defensa:
                    <input type="text" name="PokemonDefense"></input>
                    <br/>

                    Velocidad:
                    <input type="text" name="PokemonSpeed"></input>
                    <br/>

                    Altura:
                    <input type="text" name="PokemonHeight"></input>
                    <br/>

                    Peso:
                    <input type="text" name="PokemonWeight"></input>
                    <br/>
                </label>

                <div>Tipo/Tipos:
                    {types.length ? (
                        <>
                            {types.map(type => (
                                <label key={type.id} className={`type ${type.name}`}>
                                    <input type="checkbox" value={type.name} /> {type.name.toUpperCase()}
                                </label>
                            ))}
                        </>
                    ) : <span>Cargando Tipos...</span>}
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form;