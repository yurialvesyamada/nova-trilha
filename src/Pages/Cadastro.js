import { React } from 'react';
import { Form, Col, InputGroup, FormControl, Button, Container, Row, Image } from "react-bootstrap";
import Erro from '../Components/Erro/Erro';
import './Pages.css';
import { useSelector } from 'react-redux';
import novatrilha from '../assets/img/nova-trilha-logo.png';
import { Link } from 'react-router-dom';


export default function Cadastro() {
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

                        <Form className="px-md-5" method="POST" action={caminho + "/api/cadastro.php"}>
                            {/* <h1 className="py-4 text-dark fonts h1">Cadastro</h1> */}
                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-user icon" title="Username"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="nome" type="name" id="inlineFormInputGroup" placeholder="Nome" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-envelope icon" title="E-mail"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="email" type="email" id="inlineFormInputGroup2" placeholder="E-mail" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-key icon" title="Password"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="senha" type="password" placeholder="Senha" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-mobile-alt icon"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="telefone" type="number" minLength="1" maxLength="12" id="inlineFormInputGroup3" placeholder="Telefone" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-map-marker-alt icon"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="endereco" type="adress" id="inlineFormInputGroup4" placeholder="Endereço" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-graduation-cap icon"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl as="select" name="escolaridade" id="inlineFormInputGroup5" defaultValue="Escolaridade" required>
                                    <option disabled>Escolaridade</option>
                                    <option>E. Fundamental Incompleto</option>
                                    <option>E. Fundamental Completo</option>
                                    <option>E. Médio Incompleto</option>
                                    <option>E. Médio Completo</option>
                                    <option>E. Superior Incompleto</option>
                                    <option>E. Superior Completo</option>
                                </FormControl>
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-user-tie icon"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="funcao" type="text" id="inlineFormInputGroup6" placeholder="Função" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-file-upload icon"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl /* name="curriculo" */ type="text" id="inlineFormInputGroup7" placeholder="Anexar Curriculo" disabled />
                            </InputGroup>

                            <div>
                                <Col md={4} className="py-3 mx-auto">
                                    <Button className="rounded w-100" type="submit" name="cadastrar" variant="info">Cadastrar</Button>{' '}
                                </Col>
                            </div>
                        </Form>
                        <div className="py-3 h4 links text-light">
                            <h4>Já tem Cadastro?
                                <Link to="/login" className="border-bottom"> Entre aqui.</Link>
                            </h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    );


}

