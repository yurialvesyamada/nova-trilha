import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Vagas from './Pages/Vagas';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Recuperar_login from './Pages/Recuperar_login';
import Parceiros from './Pages/Parceiros';
import Deletar_usuario from './Pages/Deletar_usuario';
import Atualizar_cadastro from './Pages/Atualizar_cadastro';
import Empresas from './Pages/Empresas';
import Candidatas from './Pages/Candidatas';
import Cadastro_empresa from './Pages/Cadastro_empresa';
import Privacidade from './Pages/Privacidade';
import Termos from './Pages/Termos';
import CadastrarVaga from './Pages/CadastrarVaga';


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Vagas" component={Vagas} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Cadastro" component={Cadastro} />
            <Route exact path="/recuperar-senha" component={Recuperar_login} />
            <Route exact path="/Parceiros" component={Parceiros} />
            <Route exact path="/Deletar_usuario" component={Deletar_usuario} />
            <Route exact path="/Atualizar_cadastro" component={Atualizar_cadastro} />
            <Route exact path="/empresas" component={Empresas} />
            <Route exatc path="/Candidatas" component={Candidatas} />
            <Route exatc path="/Cadastro_empresa" component={Cadastro_empresa} />
            <Route exatc path="/privacidade" component={Privacidade} />
            <Route exatc path="/termos" component={Termos} />
            <Route exatc path="/cadastrar-vaga" component={CadastrarVaga} />
        </Switch>
    );
}