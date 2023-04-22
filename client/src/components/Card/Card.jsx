import { Link } from "react-router-dom";

import "./card.styles.css";

function Card({ id, name, image, type }) {
    return (
        <div className="card">
            <h5>{id}</h5>
            <h2>{name.toUpperCase()}</h2>
            <Link to={`/detail/${id}`}>
                <img src={image} alt="" />
            </Link>
            <div>
                {type ? <h2>{type.map(type => (
                    <span className="type"> {type.toUpperCase()} </span>
                ))}</h2> : null}
            </div>
        </div>
    )
}

export default Card;