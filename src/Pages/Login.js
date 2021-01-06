import { React, somePic } from 'react';
import { Form, Col, InputGroup, FormControl, Button, } from "react-bootstrap";




export default function Login() {
    return (

        <div className=" mx-auto p-5 m-5  col-md-5 text-center" style={{ background: `linear-gradient( #dc3545 20%, rgba(5, 7, 9, 0)150%), url(${somePic})` }}>
            <Col className="m-auto" sm={12} md={3} lg={3}>
                <a href="/Home">
                    <img src="/assets/img/nova-trilha-logo2.png" width="130px" alt="logo" title="&copy; Nova Trilha" />
                </a>
            </Col>
            <Form className="bg-danger mx-auto p-5 m-5 " method="POST" action="" sm={12} md={3} lg={3}>

                <div className="h2 pb-4">Login</div>

                <InputGroup className="mb-4" sm={12} md={3} lg={3}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroup" placeholder="E-mail" />
                </InputGroup>
                <InputGroup className="mb-4" sm={12} md={3} lg={3}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>*</InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl type="password" placeholder="senha" />
                </InputGroup>


                <Col xs="auto p-3">
                    <Button type="submit" className="mb-2">
                        Submit
                   </Button>
                </Col>
                <p>Esquecir a senha: <a href="Recuperar_login.js"> Clique aqui</a></p>
            </Form>
        </div>
    );
}
