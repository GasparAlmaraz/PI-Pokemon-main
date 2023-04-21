import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, /*useSelector*/ } from 'react-redux';
import Home from './views/Home/Home';
import Detail from './views/Detail/detail';
import Landing from './views/Landing/Landing';
import Form from './views/Form/form';
import Nav from './components/NavBar/Nav';
import { onSearchPokemon } from './redux/actions';
import './App.css';



function App() {

  //const allPokemons = useSelector(state=> state.allPokemons);
  const dispatch = useDispatch();

  const onSearch = (name) => {
    dispatch(onSearchPokemon(name));
  }

  const location = useLocation();

  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      {location.pathname !== "/" && <Nav/>}
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/home"} element={<Home onSearch={onSearch}/>} />
        <Route path={"/detail/:detailId"} element={<Detail />} />
        <Route path={"/create"} element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
