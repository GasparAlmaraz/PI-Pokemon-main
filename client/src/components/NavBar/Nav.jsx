import { NavLink } from "react-router-dom";

import "./nav.styles.css";

export default function Nav(){
    return (
    <nav >
        <NavLink to='/'>Inicio</NavLink>
        <NavLink to='/home'>Lista de Pokemons</NavLink>
        <NavLink to='/create'>Crea tu pokemon!</NavLink>
    </nav>
    );
}