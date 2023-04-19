import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav(props){
    return (
    <div >
        <NavLink to='/home'>Home</NavLink>
        <SearchBar onSearch={props.onSearch}/>
    </div>
    );
}