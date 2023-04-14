import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail(){
    
    const [pokemon, setPokemon] = useState({});
    const {detailId} = useParams();
    useEffect(() => {


        fetch(`http://localhost:3001/pokemons/${detailId}`)
          .then((response) => response.json())
          .then((pokemon) => {
            if (pokemon.name) {
              setPokemon(pokemon);
            } else {
              window.alert("No hay pokemons con ese ID");
            }
          })
          .catch(() => {
            window.alert("Error.");
          });
        return setPokemon({});
    }, [detailId]);

      return(
        <div key={pokemon.id}>
          <h1>ID: {pokemon.id}</h1>
          <h1>Nombre: {pokemon.name}</h1>
          <h2>HP: {pokemon.hp}</h2>
          <h2>Ataque: {pokemon.attack}</h2>
          <h2>Defensa: {pokemon.defense}</h2>
          <h2>Velocidad: {pokemon.speed}</h2>
          <h2>Altura: {pokemon.height}</h2>
          <h2>Peso: {pokemon.weight}</h2>
          <img src={pokemon.image} alt=""/>
          <h2>Tipo: {pokemon.type ? <>{pokemon.type.map(type => (
                <> {type} </>
            ))}</> : null}</h2>
          <hr/>
          <Link to='/home'>
            <button>Home</button>
          </Link>
        </div>
      )
}