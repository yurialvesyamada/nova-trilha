import { React } from 'react';
import { Form, Col, InputGroup, FormControl, Button, Container, Row, Image } from "react-bootstrap";
import Erro from '../Components/Erro/Erro';
import './Pages.css';
import { useSelector } from 'react-redux';
import novatrilha from '../assets/img/nova-trilha-logo.png';


export default function Delete_usuario() {
    const caminho = useSelector(state => state.caminho.caminho)

    return (
        <>
            <Erro />
            <Container className="text-center links" fluid>
                <Row className="background py-5">
                    <Col md={6} lg={6} className="mx-auto rounded">

                        <Col className="mx-auto my-5" sm={12} md={6} lg={6}>
                            <a href="/">
                                <Image src={novatrilha} alt="&copy; Nova Trilha" title="&copy; Nova Trilha" className="shadow-sm rounded w-50" />
                            </a>
                        </Col>

                        <Form className="px-md-5" method="POST" action={caminho + "/api/deletar_usuario.php"}>


                            <h1 className="py-4 h1 text-dark">Deletar Usuário</h1>
                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="icon fas fa-envelope" title="E-mail"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="email" type="email" id="inlineFormInputGroup" placeholder="E-mail" required />
                            </InputGroup>

                            <div>
                                <Col md={4} className="py-3 mx-auto">
                                    <Button className="w-100 rounded" type="submit" name="confirmar" value="confirmar" variant="info">Confirmar</Button>{' '}
                                </Col>
                                <Col md={4}/*  xs={10} */ className="py-3 mx-auto">
                                    <Button href="/" className="w-100 text-info rounded" type="submit" name="cancelar" variant="light">Cancelar</Button>{' '}
                                </Col>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}





