import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, filterPokeByOrigin, filterPokeByType, getPokemons, orderPokeByAttack, orderPokeByName } from '../../redux/actions';
import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterByType from './utils/filterByType';
import FilterByOrigin from './utils/filterByOrigin';
import OrderByName from './utils/orderByName';
import OrderByAttack from './utils/orderByAttack';

import "./home.styles.css";

function Home() {

    const dispatch = useDispatch();
    //Constante para acceder a la informacion del estado global y ordernarla/filtrarla
    const allPokemons = useSelector((state) => state.allPokemons);
    const filteredPokemons = useSelector((state) => state.filteredPokemons);
    const isLoaded = useSelector((state) => state.isLoaded);
    const [pokemonsList, setpokemonsList] = useState([]);

    //Estados locales para seleccionar el valor del filtrado/ordenado
    const [filter, setFilter] = useState("");
    const [order, setOrder] = useState("");

    //Estados locales para que no haya mas de una opcion seleccionada
    const [selectedType, setSelectedType] = useState("");
    const [selectedOrigin, setSelectedOrigin] = useState("");
    const [selectedOrderName, setSelectedOrderName] = useState("");
    const [selectedOrderAttack, setSelectedOrderAttack] = useState("");

    //Estados locales para el paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    const totalPages = Math.ceil(pokemonsList.length / pageSize);
    const pages = [];
    for (let index = 0; index < totalPages; index++) {
        pages[index] = index + 1;
    }
    const currentPokemons = pokemonsList.slice(start, end);


    useEffect(() => {


        if (!isLoaded) {
            dispatch(getPokemons());
        } else if (( filteredPokemons.length > 0 ? filteredPokemons : allPokemons )!== pokemonsList) {
            setpokemonsList(filteredPokemons.length > 0 ? filteredPokemons : allPokemons);
          }


    }, [dispatch, allPokemons, isLoaded, filter, filteredPokemons, order, pokemonsList]);


    const handlerFilter = (event) => {
        setFilter(event.target.value);
        if (event.target.value === "none") {
            dispatch(clearFilter());
        }
    }
    const handlerOrder = (event) => {
        setOrder(event.target.value);
        if (event.target.value === "none") {
            dispatch(clearFilter());
        }
    }


    const handlerSelectedType = (event) => {
        event.preventDefault();
        setSelectedType(event.target.value);
        dispatch(filterPokeByType(event.target.value));
        setCurrentPage(1);
    }
    const handlerSelectedOrigin = (event) => {
        event.preventDefault();
        setSelectedOrigin(event.target.value);
        dispatch(filterPokeByOrigin(event.target.value));
        setCurrentPage(1);
    }
    const handlerselectedOrderName = (event) => {
        event.preventDefault();
        setSelectedOrderName(event.target.value);
        dispatch(orderPokeByName(event.target.value));
        setCurrentPage(1);
    }
    const handlerselectedOrderAttack = (event) => {
        event.preventDefault();
        setSelectedOrderAttack(event.target.value);
        dispatch(orderPokeByAttack(event.target.value));
        setCurrentPage(1);
    }

    const pageUp = () => setCurrentPage(currentPage + 1);
    const pageDown = () => setCurrentPage(currentPage - 1);

    return (
        <div>
            <SearchBar />
            <div>
                <label>
                    Filtrar por:
                    <select onChange={handlerFilter}>
                        <option value="none">Ninguno</option>
                        <option value="tipo">Tipo</option>
                        <option value="origen">Origen</option>
                    </select>
                    <> </>
                    Ordenar por:
                    <select onChange={handlerOrder}>
                        <option value="none">Ninguno</option>
                        <option value="name">Nombre</option>
                        <option value="attack">Nivel de Ataque</option>
                    </select>
                    <br />
                    {
                        filter === "tipo" ?
                            <FilterByType handlerRadioChange={handlerSelectedType} selected={selectedType} />
                            :
                            filter === "origen" ?
                                <FilterByOrigin handlerRadioChange={handlerSelectedOrigin} selected={selectedOrigin} />
                                :
                                null
                    }
                    {
                        order === "name" ?
                            <OrderByName handlerselectedOrderName={handlerselectedOrderName} selectedOrderName={selectedOrderName} />
                            :
                            order === "attack" ?
                                <OrderByAttack handlerselectedOrderAttack={handlerselectedOrderAttack} selectedOrderAttack={selectedOrderAttack} />
                                :
                                null
                    }
                </label>
            </div>
            <div>
                {
                    order && currentPokemons.length ? <Cards pokemons={currentPokemons} /> :
                        currentPokemons.length ? <Cards pokemons={currentPokemons} />
                            :
                            <p>Cargando...</p>
                }
            </div>

            <button onClick={pageDown} disabled={currentPage === 1}>Anterior</button>
            <>
                {pages.map((page) => (
                    <button key={page} onClick={() => setCurrentPage(page)} disabled={currentPage === page}>{page}</button>
                ))}
            </>
            <button onClick={pageUp} disabled={end >= pokemonsList.length}>Siguiente</button>
        </div>
    );
}

export default Home;

