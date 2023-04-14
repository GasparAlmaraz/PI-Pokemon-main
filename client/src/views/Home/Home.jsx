import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../../components/Cards/Cards';


function Home() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/pokemons').then(res => setPokemons(res.data));
    }, []);

    
    return (
        <div className="home">
            <p>Esto es Home</p>
            <h2>Pokemons</h2>
            <div className="card-grid">
                <p>aña</p>
                {pokemons.length ? <Cards pokemons={pokemons}/> : <p>Cargando...</p>}
            </div>
        </div>
    );
}

export default Home;