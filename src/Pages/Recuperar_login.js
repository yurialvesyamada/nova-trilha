import Erro from '../Components/Erro/Erro';
import { React } from 'react';
import { Form, Col, InputGroup, FormControl, Button, Container, Row, Image } from "react-bootstrap";
import './Pages.css';
import { useSelector } from 'react-redux';
import novatrilha from '../assets/img/nova-trilha-logo.png';
import { Link } from 'react-router-dom';


export default function Recuperar_login() {
    const caminho = useSelector(state => state.caminho.caminho)

    return (
        <>
            <Erro />

            <Container className="text-center bg-light" fluid>
                <Row className="py-5">
                    <Col md={6} lg={6} className="mx-auto rounded">

                        <Col className="mx-auto my-5" sm={12} md={6} lg={6}>
                            <a href="/">
                                <Image src={novatrilha} alt="&copy; Nova Trilha" title="&copy; Nova Trilha" className="shadow-sm  w-50 bg-info rounded" />
                            </a>
                        </Col>

                        <Form className="bg-white px-md-5 rounded shadow-sm border" method="POST" action={caminho + "/api/Recuperar_login.php"}>
                            <div className="py-4 text-dark fonts h1">
                                <i className="fas fa-lock"></i>
                                <h1>Recuperar Senha</h1>
                            </div>
                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-envelope icon" title="E-mail"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="email" type="email" id="inlineFormInputGroup" placeholder="E-mail" required />
                            </InputGroup>

                            <div>
                                <Col md={5} className="py-3 mx-auto">
                                    <Button className="rounded w-100" type="submit" name="confirmarsenha" value="confirmar" variant="info">Recuperar</Button>{' '}
                                </Col>
                                <Col md={4} className="py-3 mx-auto">
                                    <Link to="/login" className="btn btn-outline-info rounded w-100" type="submit" name="cancelar">Voltar</Link>{' '}
                                </Col>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}





