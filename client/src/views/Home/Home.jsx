import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../redux/actions';
import Cards from '../../components/Cards/Cards';

function Home() {

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.allPokemons);

    const [filtered, setFiltered] = useState(allPokemons);
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        dispatch(getPokemons());
    
        return (()=>{});
    }, [dispatch]);


    return (
        <div className="home">
            <p>Esto es Home</p>
            <h2>Pokemons</h2>
            <div className="card-grid">
                {allPokemons.length ? <Cards pokemons={allPokemons}/> : <p>Cargando...</p>}
            </div>
        </div>
    );
}

export default Home;