import Card from "../Card/card";

export default function Cards({pokemons}) {
 
    const pokemonsList = pokemons.map((pokemon)=> {
       return (
          <Card
            id={pokemon.id}
             name={pokemon.name}
             type={pokemon.type}
             image={pokemon.image}
             types={pokemon.types}
          />
       )
    })
    return <div>{pokemonsList}</div>;
 }
 