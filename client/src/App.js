import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Detail from './views/Detail/detail';
import Landing from './views/Landing/Landing';
import Form from './views/Form/form';


import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
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
