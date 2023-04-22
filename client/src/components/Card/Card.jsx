import { Link } from "react-router-dom";

function Card({ id, name, image, type }) {
    return (
        <Link to={`/detail/${id}`}>
            <div>
                <h5>{id}</h5>
                <h2>{name}</h2>
                <img src={image} alt="" />
                <>{type ? <h2>{type.map(type => (
                    <> {type} </>
                ))}</h2> : null}</>
            </div>
        </Link>
    )
}

export default Card;