import { React } from 'react';
import { Form, Col, InputGroup, FormControl, Button, Container, Row, Image } from "react-bootstrap";
import Erro from '../Components/Erro/Erro';
import './Pages.css';
import { useSelector } from 'react-redux';
import novatrilha from '../assets/img/nova-trilha-logo.png';
import ModalCadastro from '../Components/ModalCadastro/ModalCadastro';
import { Link } from 'react-router-dom';

export default function Login() {
    const caminho = useSelector(state => state.caminho.caminho)

    return (
        <>
            <Erro />
            <Container className="text-center" fluid>
                <Row className="background py-5">
                    <Col md={6} lg={6} className="mx-auto rounded">

                        <Col className="mx-auto my-5" sm={12} md={6} lg={6}>
                            <a href="/">
                                <Image src={novatrilha} alt="&copy; Nova Trilha" title="&copy; Nova Trilha" className="shadow-sm rounded w-50" />
                            </a>
                        </Col>

                        <Form className="px-md-5" method="POST" action={caminho + "/api/login.php"}>
                            <h1 className="py-4 text-dark fonts h1">Login</h1>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-envelope" title="E-mail"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="email" type="email" id="inlineFormInputGroup" placeholder="E-mail" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-key" title="Password"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="senha" type="password" placeholder="Senha" required />
                            </InputGroup>

                            <div>
                                <Col md={4} className="py-3 mx-auto">
                                    <Button className="rounded w-100" type="submit" name="entrar" value="entrar" variant="info">Entrar</Button>{' '}
                                </Col>
                                <Col md={3} className="py-3 mx-auto">
                                    <ModalCadastro onClick={ModalCadastro.handleShow}>Cadastro</ModalCadastro>
                                </Col>
                            </div>
                        </Form>
                        <h4 className="py-3 h4 links">
                            <Link to="/recuperar-senha">Esqueci a Senha</Link>
                        </h4>
                    </Col>
                </Row>
            </Container>
        </>
    );
}








