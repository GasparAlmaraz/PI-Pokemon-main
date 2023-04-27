import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './views/Home/Home';
import Detail from './views/Detail/detail';
import Landing from './views/Landing/Landing';
import Form from './views/Form/form';
import Nav from './components/NavBar/Nav';
import './App.css';



function App() {

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav/>}
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/detail/:detailId"} element={<Detail />} />
        <Route path={"/create"} element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
