export default function OrderByAttack(props) {
    const {handlerselectedOrderAttack, selectedOrderAttack} = props;
    return (
        <div>
            <label>
                <input type='checkbox' value="ascend" onChange={handlerselectedOrderAttack} checked={selectedOrderAttack === "ascend"} />
                De menor a mayor
            </label>
            <label>
                <input type='checkbox' value="descend" onChange={handlerselectedOrderAttack} checked={selectedOrderAttack === "descend"} />
                De mayor a menor
            </label>
        </div>
    )
}