import { Link } from "react-router-dom";

function Card({ id, name, image, type }) {
    return (
        <div>
            <h5>{id}</h5>
            <h2>{name}</h2>
            <Link to={`/detail/${id}`}>
                <img src={image} alt=""/>
            </Link>
            <>{type ? <h2>{type.map(type => (
                <> {type} </>
            ))}</h2> : null}</>
        </div>
    )
}

export default Card;