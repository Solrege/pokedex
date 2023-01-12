import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/NavBar';
import Pokedex from './components/Pokedex';


function App() {
  return (
    <div className="App">
        <Header/>
        <Pokedex/>
    </div>
  );
}

export default App;
