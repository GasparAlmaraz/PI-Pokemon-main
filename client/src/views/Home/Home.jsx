import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPokeByOrigin, filterPokeByType, getPokemons, orderPokeByAttack, orderPokeByName } from '../../redux/actions';
import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterByType from './filterByType';
import styles from "./home.styles.css";
import FilterByOrigin from './filterByOrigin';


function Home(props) {

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.allPokemons);
    const [filter, setFilter] = useState("");
    const [order, setOrder] = useState("");

    const [selectedType, setSelectedType] = useState(null);
    const [selectedOrigin, setSelectedOrigin] = useState(null);
    const [selectedOrderName, setSelectedOrderName] = useState(null);
    const [selectedOrderAttack, setSelectedOrderAttack] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const currentPokemons = allPokemons.slice(start, end);


    useEffect(() => {
        dispatch(getPokemons());

        return (() => { });
    }, [dispatch]);


    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }
    const handleOrderChange = (event) => {
        setOrder(event.target.value);
    }


    const handlerRadioChangeType = (event) => {
        event.preventDefault();
        setSelectedType(event.target.value);
        dispatch(filterPokeByType(event.target.value));
    }
    const handlerRadioChangeOrigin = (event) => {
        event.preventDefault();
        setSelectedOrigin(event.target.value);
        dispatch(filterPokeByOrigin(event.target.value));
    }
    const handlerselectedOrderName = (event) => {
        event.preventDefault();
        setSelectedOrderName(event.target.value);
        dispatch(orderPokeByName(event.target.value));
    }
    const handlerselectedOrderAttack = (event) => {
        event.preventDefault();
        setSelectedOrderAttack(event.target.value);
        dispatch(orderPokeByAttack(event.target.value));
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
                        filter === "tipo" ?
                            <FilterByType handlerRadioChange={handlerRadioChangeType} selected={selectedType} />
                            :
                            filter === "origen" ?
                                <FilterByOrigin handlerRadioChange={handlerRadioChangeOrigin} selected={selectedOrigin} />
                                :
                                null
                    }
                </label>
                <label>
                    Ordenar por:
                    <select onChange={handleOrderChange}>
                        <option value="none">Ninguno</option>
                        <option value="name">Nombre</option>
                        <option value="attack">Nivel de Ataque</option>
                    </select>
                    {
                        order === "name" ?
                            <div>
                                <label>
                                    <input type='checkbox' value="ascend" onChange={handlerselectedOrderName} checked={selectedOrderName === "ascend"} />
                                    Ascendente
                                </label>
                                <label>
                                    <input type='checkbox' value="descend" onChange={handlerselectedOrderName} checked={selectedOrderName === "descend"} />
                                    Descendente
                                </label>
                            </div>
                            :
                            order === "attack" ?
                                <div>
                                    <label>
                                        <input type='checkbox' value="ascend" onChange={handlerselectedOrderAttack} checked={selectedOrderAttack === "ascend"} />
                                        Ascendente
                                    </label>
                                    <label>
                                        <input type='checkbox' value="descend" onChange={handlerselectedOrderAttack} checked={selectedOrderAttack === "descend"} />
                                        Descendente
                                    </label>
                                </div>
                                :
                                null
                    }
                </label>
            </div>
            <div className={styles.container}>
                {currentPokemons.length ? <Cards pokemons={currentPokemons} /> : <p>Cargando...</p>}
            </div>

            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={end >= allPokemons.length}>Siguiente</button>
        </div>
    );
}

export default Home;

