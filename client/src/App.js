import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Landing from './views/Landing/landing.component';

import './App.css';


function App() {

  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      <Routes>
        <Route path={"/home"} element={<Home/>}/>
        <Route path={"/"} element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
