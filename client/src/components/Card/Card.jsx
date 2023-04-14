
function Card({ name, image, type, types }) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt="" />
            <>{type? (<h2>{type}</h2>): null}</>
            <>{types? types.map((type, index) => (
                <h2 key={index}>{type.name}</h2>
            )) : null}</>
        </div>
    )
}

export default Card;