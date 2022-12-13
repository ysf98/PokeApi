
import './App.css';
import Pokemon from './components/pages/Pokemons';


im



export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/pokemons'>Pokemons</Link>
        <Route component={Pokemon} path='/pokemons'/>

        <Link to='/App'>Inicio</Link>
        <Route component={App} path='/'/>
      </section>
    </div>
  );
}


