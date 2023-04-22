import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSearchPokemon } from '../../redux/actions';
import { useNavigate } from "react-router-dom";

import "./searchbar.styles.css";

export default function SearchBar() {

   const [name, setName] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const allPokemons = useSelector(state => state.allPokemons);

   const handleChange = (event) => {
      event.preventDefault();
      setName(event.target.value);
   }

   const onClick = () => {
      
      const isAlreadyAdded = allPokemons.find(p => p.name === name.toLowerCase());
      if (isAlreadyAdded) {
         alert(`El pokemon ${name.toLowerCase()} ya se encuentra en la lista!`);
         navigate(`/detail/${isAlreadyAdded.id}`);
      } else {
         dispatch(onSearchPokemon(name));
      }
      
   }

   return (
      <div className='search-bar'>
         <label>Ingresa un pokemon a tu lista! </label>
         <input type='search' onChange={handleChange} />
         <button onClick={onClick} >Agregar</button>
      </div>
   );
}
