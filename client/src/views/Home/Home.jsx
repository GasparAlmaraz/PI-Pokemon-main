import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPokeByType, getPokemons } from '../../redux/actions';
import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';

import styles from "./home.styles.css";
import FilterByType from './filterByType';

function Home(props) {

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.allPokemons);
    const [filter, setFilter] = useState("");
    const [selected, setSelected] = useState(null);


    useEffect(() => {
        dispatch(getPokemons());

        return (() => { });
    }, [dispatch]);


    const handleFilterChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    }
    const handlerRadioChange = (event) => {
        event.preventDefault();
        setSelected(event.target.value);
        dispatch(filterPokeByType(event.target.value));
    }

    return (
        <div >
            <h2>Tus Pokemons</h2>
            <SearchBar onSearch={props.onSearch} />
            <div>
                <label>
                    Filtrar por:
                    <select onChange={handleFilterChange}>
                        <option value="none">Ninguno</option>
                        <option value="tipo">Tipo</option>
                        <option value="origen">Origen</option>
                    </select>
                    {
                        filter === "none" ?
                            null
                            :
                            filter === "tipo" ?
                                <FilterByType handlerRadioChange={handlerRadioChange} selected={selected}/>
                                :
                                <div>

                                </div>
                    }
                </label>
            </div>
            <div className={styles.container}>
                {allPokemons.length ? <Cards pokemons={allPokemons} /> : <p>Cargando...</p>}
            </div>
        </div>
    );
}

export default Home;

