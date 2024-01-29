import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Pokemons from './pages/pokemons';
import Items from './pages/items';
import Pokemon from './pages/pokemon';
import Map from './pages/map';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Pokemons />}/>
      <Route path="/items" element={<Items />}/>
      <Route path="/map" element={<Map />}/>
      <Route path="/Pokemons" element={<Pokemons />} />
      <Route path="/Pokemons/:name" element={<Pokemon />} />
    </Routes>
    </Router>
  );
}

export default App;
