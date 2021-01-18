
import { Alert } from "react-bootstrap";



export default function Erro() {

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] === variable) { return pair[1]; }
        }
        return (false);
    }
    var erro = getQueryVariable("erro");       //Retorna o tipo de erro
    
    if (erro === "atualiza") {
        return < Alert className="text-center text-dark h5" variant={"primary"}>  Dados atualizados com sucesso !   </Alert>
    } else
     if (erro === "cadastro") {
        return < Alert className="text-center text-dark h5" variant={"primary"}>  Cadastro realizado com sucesso !   </Alert>
    } else
        if (erro === "vazio") {
            return < Alert className="text-center text-dark h5" variant={"primary"}>Os campos não podem ser vazios </Alert>
            
        } else if (erro === "senha") {
            return < Alert className="text-center text-dark h5" variant={"primary"}>E-mail ou senha está incorreta </Alert>
            ////fim login
        } else if (erro === "vazio1") {
            return < Alert className="text-center text-dark h5" variant={"primary"}>preencha os campos !</Alert>
            //fim delete
        } else if (erro === "vazio2") {
            return < Alert className="text-center text-dark h5" variant={"primary"}>preencha os campos !</Alert>
        } else if (erro === "existe") {
            return < Alert className="text-center text-dark h5" variant={"primary"}>  E-mail já cadastrado, tente outro !</Alert>
        }
        ///fim cadastro
        else if (erro === "vazio3") {
            return < Alert className="text-center text-dark h5" variant={"primary"}> preencha os campos ! </Alert>

            //fim atualizar cadastro
        } else if (erro === "vazio4") {
            return < Alert className="text-center text-dark h5" variant={"primary"}>preencha os campos !</Alert>
        }
        else if (erro === "email") {
            return < Alert className="text-center text-dark h5" variant={"primary"}> O link para a redefinição da senha foi enviado para o seu  e-mail</Alert>
        } else if (erro === "errado") {
            return < Alert className="text-center text-dark h5" variant={"primary"}>  Cadastro não encontrado</Alert>
        } else if (erro === "deletar") {
            return < Alert className="text-center text-dark h5" variant={"primary"}>  Usuário Excluído</Alert>
        }

    return <></>
}   
