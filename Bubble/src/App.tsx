import "./App.css";
import PokemonCard from "./components/pokemonCard2";

function App() {
  return (
    <div>
      <PokemonCard index= {0}/>
      <PokemonCard index={1}/>
    </div>
  );
}

export default App;