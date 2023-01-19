import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Favs from './components/Favs';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import { FavoriteProvider } from './contexts/FavoriteContexts';



function App() {
  return (
    <div className="App">
      <FavoriteProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='' element={<Pokedex/>}/>
            <Route path='/favs' element={<Favs/>}/>
          </Routes>
        </BrowserRouter>
      </FavoriteProvider>
    </div>
    );
}

export default App;
