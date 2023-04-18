import { useState } from 'react';
export default function SearchBar({}) {

   const [name, setName] = useState("");

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div>
         <span  >Buscador de Personajes</span>
         <input  type='search' onChange={handleChange}/>
         <button  >Agregar</button>
      </div>
   );
}
