import { React, somePic } from 'react';
import { Form, Col, InputGroup, FormControl, Button, Container, Row } from "react-bootstrap";
import Erro from '../Components/Erro/Erro';
import './Pages.css';
import { useSelector } from 'react-redux';



export default function Cadastro() {
    const caminho = useSelector(state => state.caminho.caminho)

    return (
        <>
            <Erro />
            <Container className="text-center bg-light text-white links" fluid>
                <Row>
                    <Col md={1} lg={11} className="mx-auto my-5 rounded" style={{ background: `linear-gradient( #dc3545 20%, rgba(5, 7, 9, 0)150%), url(${somePic})` }}>
                        <Col className="mx-auto my-5" sm={12} md={6} lg={6}>
                            <a href="/">
                                <img src="/assets/img/nova-trilha-logo2.png" width="150px" alt="&copy; Nova Trilha" title="&copy; Nova Trilha" className="shadow-sm bg-white rounded" />
                            </a>
                        </Col>

                        <Form className="bg-danger px-5 m-4 rounded shadow-sm" method="POST" action={caminho + "/api/cadastro.php"}>

                            <h1 className="py-4">Cadastro</h1>

                            <InputGroup className="pb-4 py-3" as={Row} >
                               <Form.Label column sm={1}>
                                Nome 
                                </Form.Label>
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-user" title="Username"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="nome" type="name" id="inlineFormInputGroup" placeholder="Nome" required />
                            </InputGroup>

                            <InputGroup className="pb-4 py-3"  as={Row} >
                                <Form.Label column sm={1} >
                                Email
                                </Form.Label>
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-envelope" title="E-mail"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl name="email" type="email" id="inlineFormInputGroup" placeholder="E-mail" required />
                               
                            </InputGroup>                           
                                                                                   
                            <Form.Row className="py-3 px-4">

                                <Form.Group className="px-5 "  as={Col} /* controlId="formGridEmail" */>
                                <Form.Label>Senha</Form.Label>
                                <Form.Control name="senha" type="password" placeholder="Senha" />
                                </Form.Group>

                                <Form.Group className="px-2"  as={Col} /* controlId="formGridPassword" */>
                                <Form.Label>telefone</Form.Label>
                                <Form.Control  name="telefone"  type="number" placeholder="Telefone" />
                                </Form.Group>
                            </Form.Row>
                                                                                          
                            <Form.Row  className="py-3 px-4" > 

                                <Form.Group className="px-5 " as={Col} /* controlId="formGridCity" */>
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control name="cidade"  placeholder="Cidade"/>
                                
                                </Form.Group>
                                <Form.Group className="px-2" type="adress" as={Col} /* controlId="formGridCity" */   >
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control name="endereco"  placeholder="Endereço"/>
                                </Form.Group>

                                
                            </Form.Row >

                            <Form.Group name="escolaridade" className="py-1 px-4 mx-5 pr-5" as={Col} /* controlId="formGridState" */>
                                <Form.Label>Escolaridade</Form.Label>
                                <Form.Control as="select" defaultValue="ensino">
                                    <option>Ensino Fundamental Incompleto</option>
                                    <option>Ensino Fundamental Completo</option>
                                    <option>Ensino Médio Incompleto</option>
                                    <option>Ensino Médio Completo</option>
                                    <option>Ensino Técnico Incompleto</option>
                                    <option>Ensino Técnico Completo</option>
                                    <option>Ensino Superior Incompleto</option>
                                    <option>Ensino Superior Completo</option>
                                  
                                </Form.Control>
                                </Form.Group>                             

                            <InputGroup className="py-3" as={Row} /* controlId="formHorizonta" */>
                            <Form.Label column sm={3}>
                            Função Pretendida 
                            </Form.Label>
                            <FormControl name="funcao" type="text"  placeholder="Função Pretendida " required />
                            </InputGroup>
                            
                            <div className="p-4">
                                <Col>
                                    <Button href="login" className="px-5 mb-3 rounded-pill" type="submit" name="cadastrar" variant="outline-light">Cadastrar</Button>{' '}
                                </Col>
                                <h6>Já tem Cadastro? <a href="login">Entre aqui.</a></h6>
                               
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>

    );


}

