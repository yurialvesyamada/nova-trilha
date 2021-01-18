import Erro from '../Components/Erro/Erro';
import { React, somePic } from 'react';
import { Form, Col, InputGroup, FormControl, Button, Container, Row } from "react-bootstrap";
import './Pages.css';

export default function Recuperar_login() {
    return (
        <>
            <Erro />

            <Container className="text-center bg-light text-white links" fluid>
                <Row>
                    <Col md={6} lg={6} className="mx-auto my-5 rounded" style={{ background: `linear-gradient( #dc3545 20%, rgba(5, 7, 9, 0)150%), url(${somePic})` }}>

                        <Col className="mx-auto my-5" sm={12} md={6} lg={6}>
                            <a href="/">
                                <img src="/assets/img/nova-trilha-logo2.png" width="150px" alt="&copy; Nova Trilha" title="&copy; Nova Trilha" className="shadow-sm bg-white rounded" />
                            </a>
                        </Col>

                        <Form className="bg-danger px-5 m-4 rounded shadow-sm" method="POST" action="http://localhost/nova-trilha/public/api/Recuperar_login.php">

                            <h1 className="py-4">Recuperar Senha</h1>
                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-envelope" title="E-mail"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="email" type="email" id="inlineFormInputGroup" placeholder="E-mail" required />
                            </InputGroup>

                            <div className="p-4">
                                <Col>
                                    <Button className="px-5 mb-3 rounded-pill" type="submit" name="confirmarsenha" value="confirmar" variant="light">Confirmar</Button>{' '}
                                </Col>
                                <Col>
                                    <Button href="/login" className="px-4 mb-3 rounded-pill" type="submit" name="cancelar" variant="outline-light">Cancelar</Button>{' '}
                                </Col>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}





