import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPokeByOrigin, filterPokeByType, getPokemons, orderPokeByAttack, orderPokeByName } from '../../redux/actions';
import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterByType from './utils/filterByType';
import FilterByOrigin from './utils/filterByOrigin';
import OrderByName from './utils/orderByName';
import OrderByAttack from './utils/orderByAttack';

import "./home.styles.css";

function Home(props) {

    const dispatch = useDispatch();
    //Constante para acceder a la informacion del estado global
    const allPokemons = useSelector(state => state.allPokemons);
    const filteredPokemons = useSelector(state => state.filteredPokemons);
    const orderedPokemons = useSelector(state => state.orderedPokemons);

    //Estados locales para seleccionar el valor del filtrado/ordenado
    const [filter, setFilter] = useState("");
    const [order, setOrder] = useState("");

    //Estados para condicionar el renderizado
    const [selectedType, setSelectedType] = useState(null);
    const [selectedOrigin, setSelectedOrigin] = useState(null);
    const [selectedOrderName, setSelectedOrderName] = useState(null);
    const [selectedOrderAttack, setSelectedOrderAttack] = useState(null);

    //Estados locales para el paginado
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
        if(filter === "none") currentPokemons = allPokemons;
    }
    const handleOrderChange = (event) => {
        setOrder(event.target.value);
        if(order === "none") currentPokemons = allPokemons;
    }


    const handlerRadioChangeType = (event) => {
        event.preventDefault();
        setSelectedType(event.target.value);
        dispatch(filterPokeByType(event.target.value));
        currentPokemons = filteredPokemons;
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
        currentPokemons = orderedPokemons;
    }
    const handlerselectedOrderAttack = (event) => {
        event.preventDefault();
        setSelectedOrderAttack(event.target.value);
        dispatch(orderPokeByAttack(event.target.value));
        currentPokemons = orderedPokemons;
    }

    const pageUp = () => setCurrentPage(currentPage + 1);
    const pageDown = () => setCurrentPage(currentPage - 1);

    return (
        <div>
            <SearchBar onSearch={props.onSearch} />
            <div>
                <label>
                    Filtrar por:
                    <select onChange={handleFilterChange}>
                        <option value="none">Ninguno</option>
                        <option value="tipo">Tipo</option>
                        <option value="origen">Origen</option>
                    </select>
                    <> </>
                    Ordenar por:
                    <select onChange={handleOrderChange}>
                        <option value="none">Ninguno</option>
                        <option value="name">Nombre</option>
                        <option value="attack">Nivel de Ataque</option>
                    </select>
                    <br/>
                    {
                        filter === "tipo" ?
                            <FilterByType handlerRadioChange={handlerRadioChangeType} selected={selectedType} />
                            :
                            filter === "origen" ?
                                <FilterByOrigin handlerRadioChange={handlerRadioChangeOrigin} selected={selectedOrigin} />
                                :
                                null
                    }
                    {
                        order === "name" ?
                            <OrderByName handlerselectedOrderName={handlerselectedOrderName} selectedOrderName={selectedOrderName}/>
                            :
                            order === "attack" ?
                                <OrderByAttack handlerselectedOrderAttack={handlerselectedOrderAttack} selectedOrderAttack={selectedOrderAttack}/>
                                :
                                null
                    }
                </label>
            </div>
            <div>
                {currentPokemons.length ? <Cards pokemons={currentPokemons} /> 
                : 
                <p>Cargando...</p>

                }
            </div>

            <button onClick={pageDown} disabled={currentPage === 1}>Anterior</button>
            <button onClick={pageUp} disabled={end >= allPokemons.length}>Siguiente</button>
        </div>
    );
}

export default Home;

