import { useEffect, useState } from "react";
import axios from "axios";


export default function FilterByType(props) {

    const [types, setTypes] = useState([]);

    async function getTypes() {
        const response = await axios.get(`http://localhost:3001/types`);
        setTypes(response.data);
    }

    useEffect(() => {
        getTypes();
    }, [])

    const { handlerRadioChange, selected } = props;


    return (
        <div>
            <label>
                <input type="radio" value="all" onChange={handlerRadioChange} checked={selected === ("all")} />
                Todos
            </label>
            <></>
            {types.length ?
                types.map(type => (
                    <label>
                        <input type="radio" value={type.name} onChange={handlerRadioChange} checked= {selected === type.name}/>{type.name}
                    </label>
                ))
                : <span>Cargando Tipos...</span>}
        </div>
    )
}