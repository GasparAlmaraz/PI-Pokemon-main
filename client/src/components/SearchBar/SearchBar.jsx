import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSearchPokemon } from '../../redux/actions';
export default function SearchBar() {

   const [name, setName] = useState("");
   const dispatch = useDispatch();
   const allPokemons = useSelector(state => state.allPokemons);

   const handleChange = (event) => {
      event.preventDefault();
      setName(event.target.value);
   }

   const onClick = () => {
      
      const isAlreadyAdded = allPokemons.find(p => p.name === name.toLowerCase());
      if (isAlreadyAdded) {
         alert(`El pokemon ${name.toLowerCase()} ya ha sido agregado!`);
      } else {
         dispatch(onSearchPokemon(name));
      }
      
   }

   return (
      <div>
         <span>Buscador de Pokemones</span>
         <input type='search' onChange={handleChange} />
         <button onClick={onClick} >Agregar</button>
      </div>
   );
}
