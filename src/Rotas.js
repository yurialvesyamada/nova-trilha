import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Vagas from './Pages/Vagas';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Recuperar_login from './Pages/Recuperar_login';
import Parceiros from './Pages/Parceiros';


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Vagas" component={Vagas} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Cadastro" component={Cadastro} />
            <Route exact path="/Recuperar-senha" component={Recuperar_login} />
            <Route exact path="/Parceiros" component={Parceiros} />
        </Switch>
    );
}