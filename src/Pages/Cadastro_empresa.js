import { React} from 'react';
import { Form, Col, InputGroup, FormControl, Button, Container, Row, Image } from "react-bootstrap";
import Erro from '../Components/Erro/Erro';
import './Pages.css';
import { useSelector } from 'react-redux';
import novatrilha from '../assets/img/nova-trilha-logo.png';


export default function Cadastro_empresa() {
    const caminho = useSelector(state => state.caminho.caminho)
 
    return (
        <>
            <Erro />
            <Container className="text-center text-dark links" fluid>
                <Row className="background py-5">
                    <Col md={6} lg={6} className="mx-auto rounded">
                        <Col className="mx-auto my-5" sm={12} md={6} lg={6}>
                            <a href="/">
                                <Image src={novatrilha} alt="&copy; Nova Trilha" title="&copy; Nova Trilha" className="shadow-sm rounded w-50" />
                            </a>
                        </Col>


                        <Form className="px-5 m-3" method="POST" action={caminho + "/api/Cadastro_empresa.php"}>
                            <h1 className="py-4 h1 text-info">Cadastrar Empresa</h1>
                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-user" title="Username"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="nome" type="name" id="inlineFormInputGroup" placeholder="Razão social" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-mobile-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="cnpj" type="text" minLength="1" maxLength="12" id="inlineFormInputGroup3" placeholder="CNPJ" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i class="far fa-building"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="Ramo_atividade" type="text" id="inlineFormInputGroup4" placeholder="Ramo de atividade" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-envelope" title="E-mail"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="email" type="email" id="inlineFormInputGroup2" placeholder="E-mail" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-key" title="Password"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="senha" type="password" placeholder="Senha" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="data_abertura" type="text" minLength="1" maxLength="12" id="inlineFormInputGroup3" placeholder="Data de abertura" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-mobile-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="telefone" type="text" minLength="1" maxLength="12" id="inlineFormInputGroup3" placeholder="Telefone" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-map-marker-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="endereco" type="adress" id="inlineFormInputGroup4" placeholder="Endereço" required />
                            </InputGroup>              

                            <div>
                                <Col className="pb-3">
                                    <Button className="px-5 rounded-pill" type="submit" name="cadastrar" variant="info">Cadastrar</Button>{' '}
                                </Col>
                            </div>
                        </Form>
                                <div className="h4 py-3 text-light">
                                    <h4>Já tem Cadastro? <a href="/login" className="border-bottom">Entre aqui.</a></h4>
                                </div>
                    </Col>
                </Row>
            </Container>
        </>

    );


}

