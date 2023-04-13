import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Home() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:3001/pokemons').then(res => setPokemons(res.data));
    }, []);

    
    return (
        <div className="home">
            <p>Esto es Home</p>
            <h2>Pokemons</h2>
            <div className="card-grid">
                <p>{pokemons.map(pokemon => (
                    <div key={pokemon.id}>
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.image} alt={`Imagen de ${pokemon.name}`} />
                        <p>{pokemon.description}</p>
                    </div>
                ))}</p>
            </div>
        </div>
    );
}

export default Home;