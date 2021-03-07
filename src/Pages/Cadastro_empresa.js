import { React } from 'react';
import { Form, Col, InputGroup, FormControl, Button, Container, Row, Image } from "react-bootstrap";
import Erro from '../Components/Erro/Erro';
import './Pages.css';
import { useSelector } from 'react-redux';
import novatrilha from '../assets/img/nova-trilha-logo.png';
import { Link } from 'react-router-dom';


export default function Cadastro_empresa() {
    const caminho = useSelector(state => state.caminho.caminho)

    return (
        <>
            <Erro />
            <Container className="text-center text-dark" fluid>
                <Row className="background py-5">
                    <Col md={6} lg={6} className="mx-auto rounded">
                        <Col className="mx-auto my-5" sm={12} md={6} lg={6}>
                            <a href="/">
                                <Image src={novatrilha} alt="&copy; Nova Trilha" title="&copy; Nova Trilha" className="shadow-sm rounded w-50" />
                            </a>
                        </Col>


                        <Form className="px-md-5" method="POST" action={caminho + "/api/Cadastro_empresa.php"}>
                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="icon fas fa-user" title="Username"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="nome" type="name" id="inlineFormInputGroup" placeholder="Razão social" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="icon fas fa-lock"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="cnpj" type="number" minLength="1" maxLength="12" id="inlineFormInputGroup2" placeholder="CNPJ" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="icon far fa-building"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="Ramo_atividade" type="text" id="inlineFormInputGroup3" placeholder="Ramo de atividade" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="icon fas fa-envelope" title="E-mail"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="email" type="email" id="inlineFormInputGroup4" placeholder="E-mail" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="icon fas fa-key" title="Password"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="senha" type="password" placeholder="Senha" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="icon fas fa-mobile-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="telefone" type="number" minLength="1" maxLength="12" id="inlineFormInputGroup6" placeholder="Telefone" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="icon fas fa-map-marker-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="endereco" type="adress" id="inlineFormInputGroup7" placeholder="Endereço" required />
                            </InputGroup>

                            <div>
                                <Col md={4} className="py-3 mx-auto">
                                    <Button className="w-100" type="submit" name="cadastrar" variant="info">Cadastrar</Button>{' '}
                                </Col>
                            </div>
                        </Form>
                        <div className="py-3 h4 text-light">
                            <h4>Já tem Cadastro?
                                <Link to="/login" className="links"> Entre aqui.</Link>
                            </h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    );


}

