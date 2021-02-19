import { React } from 'react';
import { Form, Col, InputGroup, FormControl, Button, Container, Row, Image } from "react-bootstrap";
import Erro from '../Components/Erro/Erro';
import './Pages.css';
import { useSelector } from 'react-redux';
import novatrilha from '../assets/img/nova-trilha-logo.png';
import { Link } from 'react-router-dom';


export default function Atualizar_cadastro() {
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

                        <Form className="px-5 m-3" method="POST" action={caminho + "/api/Atualizar_cadastro.php"}>

                            <h1 className="py-4 h1 text-info">Atualizar Cadastro</h1>
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
                                <FormControl name="email_novo" type="email" id="inlineFormInputGroup2" placeholder="Novo e-mail" required />
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
                                <FormControl name="telefone" type="number" minLength="1" maxLength="12" id="inlineFormInputGroup3" placeholder="Telefone" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-map-marker-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="endereco" type="adress" id="inlineFormInputGroup4" placeholder="Endereço" required />
                            </InputGroup>

                            <h5 className="h5 text-info">Digite o e-mail anterior:</h5>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-envelope" title="E-mail"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="email" type="email" id="inlineFormInputGroup5" placeholder="E-mail" required />
                            </InputGroup>

                            <div>
                                <Col className="pb-3">
                                    <Button className="px-5 rounded-pill" type="submit" name="confirmar" variant="info">Confirmar</Button>{' '}
                                </Col>
                                <Col className="pb-3">
                                    <Button href="/login" className="rounded-pill px-5" type="submit" name="cancelar_cadastro" value="cancelar_cadastro" variant="outline-light">Voltar</Button>{' '}
                                </Col>

                            </div>
                        </Form>
                        <Link to="/Deletar_usuario" className="h5">Excluir Usuário</Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}



