export default function OrderByName(props) {
    const { handlerselectedOrderName, selectedOrderName } = props;
    return (
        <div>
            <label>
                <input type='checkbox' value="ascend" onChange={handlerselectedOrderName} checked={selectedOrderName === "ascend"} />
                De menor a mayor
            </label>
            <label>
                <input type='checkbox' value="descend" onChange={handlerselectedOrderName} checked={selectedOrderName === "descend"} />
                De mayor a menor
            </label>
        </div>
    )
}