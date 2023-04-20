
export default function FilterByType(props){

    const {handlerRadioChange, selected} = props;
    return (
        <div>
            <label>
                <input type="radio" value="all" onChange={handlerRadioChange} checked={selected === ("all")} />
                Todos
            </label>
            <label>
                <input type="radio" value="normal" onChange={handlerRadioChange} checked={selected === ("normal")} />
                Normal
            </label>
            <label>
                <input type="radio" value="fighting" onChange={handlerRadioChange} checked={selected === ("fighting")} />
                Pelea
            </label>
            <label>
                <input type="radio" value="flying" onChange={handlerRadioChange} checked={selected === ("flying")} />
                Vuelo
            </label>
            <label>
                <input type="radio" value="poison" onChange={handlerRadioChange} checked={selected === ("poison")} />
                Veneno
            </label>
            <label>
                <input type="radio" value="ground" onChange={handlerRadioChange} checked={selected === ("ground")} />
                Tierra
            </label>
            <label>
                <input type="radio" value="rock" onChange={handlerRadioChange} checked={selected === ("rock")} />
                Roca
            </label>
            <label>
                <input type="radio" value="bug" onChange={handlerRadioChange} checked={selected === ("bug")} />
                Insecto
            </label>
            <label>
                <input type="radio" value="ghost" onChange={handlerRadioChange} checked={selected === ("ghost")} />
                Fantasma
            </label>
            <label>
                <input type="radio" value="steel" onChange={handlerRadioChange} checked={selected === ("steel")} />
                Acero
            </label>
            <label>
                <input type="radio" value="fire" onChange={handlerRadioChange} checked={selected === ("fire")} />
                Fuego
            </label>
            <label>
                <input type="radio" value="water" onChange={handlerRadioChange} checked={selected === ("water")} />
                Agua
            </label>
            <label>
                <input type="radio" value="grass" onChange={handlerRadioChange} checked={selected === ("grass")} />
                Planta
            </label>
            <label>
                <input type="radio" value="electric" onChange={handlerRadioChange} checked={selected === ("electric")} />
                Electrico
            </label>
            <label>
                <input type="radio" value="psychic" onChange={handlerRadioChange} checked={selected === ("psychic")} />
                Psiquico
            </label>
            <label>
                <input type="radio" value="ice" onChange={handlerRadioChange} checked={selected === ("ice")} />
                Hielo
            </label>
            <label>
                <input type="radio" value="dragon" onChange={handlerRadioChange} checked={selected === ("dragon")} />
                Dragon
            </label>
            <label>
                <input type="radio" value="dark" onChange={handlerRadioChange} checked={selected === ("dark")} />
                Oscuro
            </label>
            <label>
                <input type="radio" value="fairy" onChange={handlerRadioChange} checked={selected === ("fairy")} />
                Hada
            </label>
            <label>
                <input type="radio" value="unknown" onChange={handlerRadioChange} checked={selected === ("unknown")} />
                Desconocido
            </label>
            <label>
                <input type="radio" value="shadow" onChange={handlerRadioChange} checked={selected === ("shadow")} />
                Sombra
            </label>
        </div>
    )
}