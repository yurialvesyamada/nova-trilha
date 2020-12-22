import { Switch, Route } from 'react-router-dom';
import Home from './Pages/home';
import Vagas from './Pages/vagas';
import Login from './Pages/login';
import Cadastro from './Pages/cadastro';
import Recuperar_login from './Pages/recuperar_login';
import Parceiros from './Pages/parceiros';


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Vagas" component={Vagas} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Cadastro" component={Cadastro} />
            <Route exact path="/Recuperar-senha" component={Recuperar_login} />
            <Route exact path="/Parceiros" component={Parceiros} />
        </Switch>
    );
}