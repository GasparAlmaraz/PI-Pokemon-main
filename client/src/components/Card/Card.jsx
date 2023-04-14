
function Card({ name, image, type, types }) {
    console.log(type);
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt="" />
            <>{type? <h2>{(type.map((type) => (
                <> {type} </>
            )))}</h2>: null}</>
            <>{types? <h2>{(types.map((type) => (
                <>{type.name}</>
            )))}</h2> : null}</>
        </div>
    )
}

export default Card;