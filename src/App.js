import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/NavBar';
import Pokedex from './components/Pokedex';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">
        <Header/>
        <SearchBar/>
        <Pokedex/>
    </div>
  );
}

export default App;
