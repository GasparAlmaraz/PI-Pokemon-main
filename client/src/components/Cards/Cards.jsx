import Card from "../Card/Card.jsx";

export default function Cards({pokemons}) {
 
    const pokemonsList = pokemons.map((pokemon)=> {
       return (
          <Card
             name={pokemon.name}
             type={pokemon.type}
             image={pokemon.image}
          />
       )
    })
    return <div>{pokemonsList}</div>;
 }
 