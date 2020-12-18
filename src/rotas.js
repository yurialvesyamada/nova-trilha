import { Switch, Route } from 'react-router-dom';
import Home from './Pages/home';
import Vagas from './Pages/vagas';
import Login from './Pages/login';
import Cadastro from './Pages/cadastro';
import Recuperar_login from './Pages/recuperar_login';
import Parceiros from './Pages/parceiros';


export default function Rotas() {
    return (
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/vagas" component={Vagas} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/recuperar-senha" component={Recuperar_login} />
            <Route exact path="/parceiros" component={Parceiros} />
        </Switch>
    );
}