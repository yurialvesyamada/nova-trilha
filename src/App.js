import { BrowserRouter } from 'react-router-dom';
import Rotas from './rotas';
import Menu from './Components/Menu/menu';

export default function App() {
  return (
    <BrowserRouter>
      <div id="App">
        <header>
          <Menu />
        </header>
        <main>
          <Rotas />
        </main>

      </div>
    </BrowserRouter>
  );
}