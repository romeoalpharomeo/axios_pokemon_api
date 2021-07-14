import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import PokemonBox from './components/PokemonBox'

function App() {
  // const [pokemon, setPokemon] = useState("bidoof")
  const [pokemonInfo, setPokemonInfo] = useState([]);
  // const [pokemonInfo1, setPokemonInfo1] = useState({});

  const getPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(res=>setPokemonInfo(res.data.results))
    .catch(err=>console.log(err))

  }
  
  let count = pokemonInfo.length


  return (
    <div className="App">
      <h1>Catch all Pokemon</h1>
        <button onClick={getPokemon} type="submit" className="btn btn-primary m-3">Submit</button>

        <PokemonBox pokemonInfo={pokemonInfo} count={count} />

    </div>
  );
}

export default App;