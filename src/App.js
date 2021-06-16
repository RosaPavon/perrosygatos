import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import perros from './perros';
import gatos from './gatos';
import Perro from './Perro'
import Gato from './Gato'

function Cabecera() {
  return (
    <header>
      <h1>Rutas en React</h1>
      <nav>
        <ul>
          <li>
            <Link to="/perros">Perros</Link>   
          </li>
          <li>
            <Link to="/gatos">Gatos</Link>   
          </li>
        </ul>
      </nav>
    </header>
  );
}

function App() {


  return (
      <BrowserRouter>
          <Cabecera />
              <Route path="/perros">
              <Perro perros={perros}/>
              </Route>
              <Route path="/gatos">
              <Gato gatos={gatos}/>
              </Route>
      </BrowserRouter>
  );
}


export default App;

