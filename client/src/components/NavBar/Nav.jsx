import { NavLink } from "react-router-dom";

export default function Nav(){
    return (
    <div >
        <NavLink to='/'>Inicio</NavLink>
        <NavLink to='/home'>Principal</NavLink>
        <NavLink to='/create'>Crea tu pokemon!</NavLink>
    </div>
    );
}