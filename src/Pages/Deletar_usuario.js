import { React, somePic } from 'react';
import { Form, Col, InputGroup, FormControl, Button, } from "react-bootstrap";



export default function Delete_usuario() {


    return (

        <div className=" mx-auto p-5 m-5  col-md-5 text-center" style={{ background: `linear-gradient( #dc3545 20%, rgba(5, 7, 9, 0)150%), url(${somePic})` }}>
            <Col className="m-auto" sm={12} md={3} lg={3}>
                <a href="/Home">
                    <img src="/assets/img/nova-trilha-logo2.png" width="130px" alt="logo" title="&copy; Nova Trilha" />
                </a>
            </Col>
            <Form className="bg-danger mx-auto p-5 m-5 " method="POST" action="http://localhost/nova-trilha/public/api/deletar_usuario.php" sm={12} md={3} lg={3}>

                <div className="h2 pb-4 text-white">Deletar Usuário</div>

                <InputGroup className="mb-4" sm={12} md={3} lg={3}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl name="email" id="inlineFormInputGroup" placeholder="E-mail" />
                </InputGroup>
                
                <div className="text-center p-3">
                    <div>

                        <Button className=" mb-3  px-5 rounded-pill" type=" submit" name="confirmar" value="confirmar" variant="light">Confirmar</Button>{' '}

                    </div>
                    <div>
                        <Button href="/cadastro" className=" mb-3  px-4 rounded-pill" type="submit" name="cancelar" variant="outline-light">Cancelar</Button>{' '}

                    </div>

                   
                </div>
            </Form>
        </div>
    );
}
