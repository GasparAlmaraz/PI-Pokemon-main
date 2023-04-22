import { Link } from "react-router-dom";

import "./landing.styles.css";

const Landing = () => {
    return (
        <div className="landing">
            <h1>Bienvenido a la Pokedex de la region de Kanto!</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pokemon_FireRed.svg/1200px-Pokemon_FireRed.svg.png" alt=""/>
            <br/>
            <Link to={"/home"}>
                <button>Press Start</button>
            </Link>
        </div>
    )
}

export default Landing;