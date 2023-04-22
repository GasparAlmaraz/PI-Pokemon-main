
export default function FilterByOrigin(props) {

    const { handlerRadioChange, selected } = props;

    return (
        <div>
            <label>
                <input type='radio' value='database' onChange={handlerRadioChange} checked={selected === "database"} />
                Base de datos
            </label>
            <label>
                <input type='radio' value='api' onChange={handlerRadioChange} checked={selected === "api"} />
                API
            </label>
        </div>
    )
}