import { React, somePic } from 'react';
import { Form, Col, InputGroup, FormControl, Button, } from "react-bootstrap";



export default function Login() {

    /*
   // estado que recebr dados e mostrar na tela
   const [dados, setDados] = React.useState(null)


   async function handleClick({ target }) {
       // pegando o texto que está no botao

       // puxando dados de uma APi externa
       const produtoResponse = await fetch('http://localhost/nova-trilha/public/api/login.php');
       // trasformando objeto
       const produtoJson = await produtoResponse.json()

       // colocando o obbjeto dentro da constante 'dados'
       //setDados(produtoJson)
       console.log(produtoJson);
   }
*/
    return (

        <div className=" mx-auto p-5 m-5  col-md-5 text-center" style={{ background: `linear-gradient( #dc3545 20%, rgba(5, 7, 9, 0)150%), url(${somePic})` }}>
            <Col className="m-auto" sm={12} md={3} lg={3}>
                <a href="/Home">
                    <img src="/assets/img/nova-trilha-logo2.png" width="130px" alt="logo" title="&copy; Nova Trilha" />
                </a>
            </Col>
            <Form className="bg-danger mx-auto p-5 m-5 " method="POST" action="http://localhost/nova-trilha/public/api/login.php" sm={12} md={3} lg={3}>

                <div className="h2 pb-4 text-white">Login</div>

                <InputGroup className="mb-4" sm={12} md={3} lg={3}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl name="email" id="inlineFormInputGroup" placeholder="E-mail" />
                </InputGroup>
                <InputGroup className="mb-4" sm={12} md={3} lg={3}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>*</InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl name="senha" type="password" placeholder="senha" />
                </InputGroup>

                <div className="text-center p-3">
                    <div>

                        <Button className=" mb-3  px-5 rounded-pill" type=" submit" name="entrar" value="entrar" variant="light">Entrar</Button>{' '}

                    </div>
                    <div>
                        <Button href="cadastro" className=" mb-3  px-4 rounded-pill" type="submit" name="cadastro" variant="outline-light">Cadastrar</Button>{' '}

                    </div>

                    <p className="text-white ">Esquecir a senha: <a href="Recuperar_login.js" className="text-white link-primary"> Clique aqui</a></p>
                </div>
            </Form>
        </div>
    );
}
