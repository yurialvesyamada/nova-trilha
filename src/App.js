import { BrowserRouter } from 'react-router-dom';
import Routes from './Rotas';
import Menu from './Components/Menu/Menu';
import Rodape from './Components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div id="App">
        <header>
          <Menu />
        </header>
        <main>
          <Routes />
        </main>
        <footer>
          <Rodape />
        </footer>
      </div>
    </BrowserRouter>
  );
}