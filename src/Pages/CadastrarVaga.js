import { React } from 'react';
import { useState, useEffect } from 'react';
import { Form, Col, InputGroup, FormControl, Button, Container, Row, Image } from "react-bootstrap";
import Erro from '../Components/Erro/Erro';
import './Pages.css';
import { useSelector } from 'react-redux';
import novatrilha from '../assets/img/nova-trilha-logo.png';


export default function CadastrarVaga() {
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

                        

                        <Form className="px-md-5" method="POST" action={caminho + "/api/CadastrarVaga.php"}>
                            <h1 className="py-4 h1 text-info">Cadastrar vagas</h1>
                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="icon fas fa-user" title="text"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="vaga" type="text" id="inlineFormInputGroup" placeholder="cargo" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="icon fas fa-user" title="text"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="descricao" type="text" id="inlineFormInputGroup" placeholder="descricão da vaga" required />
                            </InputGroup>

                           
                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="icon fas fa-user" title="text"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="empregador" type="text" id="inlineFormInputGroup" placeholder="Empresa" required />
                            </InputGroup>

            
                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="icon fas fa-map-marker-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="localizacao" type="adress" id="inlineFormInputGroup7" placeholder="Endereço" required />
                            </InputGroup>

                            <InputGroup className="pb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="icon fas fa-mobile-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="salario" type="number" minLength="1" maxLength="12" id="inlineFormInputGroup6" placeholder="Salário" required />
                            </InputGroup>


                            <div>
                                <Col md={4} className="py-3 mx-auto">
                                    <Button className="w-100" type="submit" name="cadastrar" variant="info">Cadastrar</Button>{' '}
                                </Col>
                            </div>
                        </Form>
                     
                    </Col>
                </Row>
            </Container>
        </>

    );


}

