import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/home.component';
import Detail from './views/Detail/detail.component';
import Form from './views/Form/form.component';
import Landing from './views/Landing/landing.component';

function App() {
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      <Routes>
        <Route path={"/home"} element={<Home/>}/>
        <Route path={"/detail"} element={<Detail/>}/>
        <Route path={"/form"} element={<Form/>}/>
        <Route path={"/"} element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
