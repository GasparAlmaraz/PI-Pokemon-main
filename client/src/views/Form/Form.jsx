import { useEffect, useState } from "react";
import axios from "axios";

import "./form.styles.css";
import validation from "./utils/validations";


const Form = () => {

    const [types, setTypes] = useState([]);
    const [pokemon, setPokemon] = useState({});
    const [errors, setErrors] = useState({});

    async function getTypes() {
        const response = await axios.get(`http://localhost:3001/types`);
        setTypes(response.data);
    }

    useEffect(() => {
        getTypes();
    }, [])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "type") {
          setPokemon((prevState) => ({
            ...prevState,
            [name]: prevState[name].concat(value)
          }));
        } else {
          setPokemon({
            ...pokemon,
            [name]: value
          });
        }
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(pokemon);
        if(Object.keys(validationErrors).length === 0){
            /*Despachar la action para subir el pokemon a la DB
            y cargarlo al estado local*/
        }else{
            alert("Complete correctamente los campos.");
            setErrors(validationErrors);
        }
    }

    return (
        <div className="form-container">
            <h2>Crea tu pokemon!</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="name" onChange={handleInputChange}></input>
                    {errors.name? (<p>{errors.name}</p>): null}

                    <br/>
                    Imagen (debe ser un URL):
                    <input type="text" name="image" onChange={handleInputChange}></input>
                    {errors.image? (<p>{errors.image}</p>): null}

                    <br/>
                    Vida:
                    <input type="text" name="hp" onChange={handleInputChange}></input>
                    {errors.hp? (<p>{errors.hp}</p>): null}

                    <br/>
                    Ataque:
                    <input type="text" name="attack" onChange={handleInputChange}></input>
                    {errors.attack? (<p>{errors.attack}</p>): null}

                    <br/>
                    Defensa:
                    <input type="text" name="defense" onChange={handleInputChange}></input>
                    {errors.defense? (<p>{errors.defense}</p>): null}

                    <br/>
                    Velocidad:
                    <input type="text" name="speed" onChange={handleInputChange}></input>
                    {errors.speed? (<p>{errors.speed}</p>): null}

                    <br/>
                    Altura:
                    <input type="text" name="height" onChange={handleInputChange}></input>
                    {errors.height? (<p>{errors.height}</p>): null}

                    <br/>
                    Peso:
                    <input type="text" name="weight" onChange={handleInputChange}></input>
                    {errors.weight? (<p>{errors.weight}</p>): null}

                    <br/>
                </label>

                <div>Tipo/Tipos:
                    {types.length ? (
                        <>
                            {types.map(type => (
                                <label key={type.id} className={`type ${type.name}`}>
                                    <input type="checkbox" value={type.name} name="type" onChange={handleInputChange}/> {type.name.toUpperCase()}
                                    {errors.type? (<p>{errors.type}</p>): null}
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