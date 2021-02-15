import { React, somePic } from 'react';
import { Form, Col, InputGroup, FormControl, Button, Container, Row } from "react-bootstrap";
import Erro from '../Components/Erro/Erro';
import './Pages.css';
import { useSelector } from 'react-redux';


export default function Atualizar_cadastro() {
    const caminho = useSelector(state => state.caminho.caminho)

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

                        <Form className="bg-danger px-5 m-4 rounded shadow-sm" method="POST" action={caminho + "/api/Atualizar_cadastro.php"}>

                            <h2 className="py-4">Atualizar Cadastro</h2>
                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-user" title="Username"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="nome" type="name" id="inlineFormInputGroup" placeholder="Nome" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-envelope" title="E-mail"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="email_novo" type="email" id="inlineFormInputGroup" placeholder="Novo e-mail" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-key" title="Password"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="senha" type="password" placeholder="Senha" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-mobile-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="telefone" type="number" minLength="1" maxLength="12" id="inlineFormInputGroup" placeholder="Telefone" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-map-marker-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="endereco" type="adress" id="inlineFormInputGroup" placeholder="Endereço" required />
                            </InputGroup>
                            <p>Digite o e-mail anterior:</p>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-envelope" title="E-mail"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="email" type="email" id="inlineFormInputGroup" placeholder="E-mail" required />
                            </InputGroup>

                            <div className="p-4">
                                <Col>
                                    <Button className="px-5 mb-3 rounded-pill" type="submit" name="confirmar" variant="light">Confirmar</Button>{' '}
                                </Col>
                                <Col>
                                    <Button href="/login" className="px-4 mb-3 rounded-pill" type="submit" name="cancelar_cadastro" value="cancelar_cadastro" variant="outline-light">Cancelar</Button>{' '}
                                </Col>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}



