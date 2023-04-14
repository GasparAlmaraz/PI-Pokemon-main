
function Card({name, image, type}){
    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt=""/>
            <h2>{type}</h2>
        </div>
    )
}

export default Card;