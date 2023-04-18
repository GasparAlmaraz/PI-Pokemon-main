import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav(){
    return (
    <div className={styles.container}>
        <NavLink to='/home'>Home</NavLink>
        <SearchBar onSearch={props.onSearch}/>
    </div>
    );
}