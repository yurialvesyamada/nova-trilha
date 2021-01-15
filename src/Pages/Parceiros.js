import React from 'react';
import './Pages.css';
import { Container, Row, Card, Button } from 'react-bootstrap';
import logo_advocacia from '../Components/Vagas/empresas-img/logo_advocacia.png';
import logo_barbearia from '../Components/Vagas/empresas-img/logo_barbearia.png';
import logo_curso from '../Components/Vagas/empresas-img/logo_curso.png';
import logo_pet from '../Components/Vagas/empresas-img/logo_pet.png'; 


export default function Parceiros() {
    return (
        <>
            <Container className="text-center bg-light font" fluid>
                <div className="py-4">
                    <h1>Empresas Parceiras</h1>
                </div>
                <Row>
                    <Card className="mx-auto shadow-sm bg-white rounded my-4" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={logo_advocacia} alt="Empresas Parceiras" className="w-100" />
                        <Card.Body className="d-flex flex-column mt-auto py-4">
                            <Card.Title>
                                <h3>Menezes  Advogados</h3>
                            </Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit rem sed ipsa, consequuntur quidem consequatur possimus repudiandae? Cupiditate, recusandae voluptates tempora iste sed, voluptas, aut at quisquam eum minima iusto.</p>
                            </Card.Text>
                            <Button variant="outline-danger" className="mt-auto" href="/vagas">Visitar</Button>{' '}
                        </Card.Body>
                    </Card>

                    <Card className="mx-auto shadow-sm bg-white rounded my-4" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={logo_barbearia} alt="Empresas Parceiras" className="w-100" />
                        <Card.Body className="d-flex flex-column mt-auto py-4">
                            <Card.Title>
                                <h3>Navalha Barbearia</h3>
                            </Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit rem sed ipsa, consequuntur quidem consequatur possimus repudiandae? Cupiditate, recusandae voluptates tempora iste sed, voluptas, aut at quisquam eum minima iusto.</p>
                            </Card.Text>
                            <Button variant="outline-danger" className="mt-auto" href="/vagas">Visitar</Button>{' '}
                        </Card.Body>
                    </Card>

                    <Card className="mx-auto shadow-sm bg-white rounded my-4" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={logo_curso} alt="Empresas Parceiras" className="w-100" />
                        <Card.Body className="d-flex flex-column mt-auto py-4">
                            <Card.Title>
                                <h3>Origem Cursos e Concursos</h3>
                            </Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit rem sed ipsa, consequuntur quidem consequatur possimus repudiandae? Cupiditate, recusandae voluptates tempora iste sed, voluptas, aut at quisquam eum minima iusto.</p>
                            </Card.Text>
                            <Button variant="outline-danger" className="mt-auto" href="/vagas">Visitar</Button>{' '}
                        </Card.Body>
                    </Card>

                    <Card className="mx-auto shadow-sm bg-white rounded my-4" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={logo_pet} alt="Empresas Parceiras" className="w-100" />
                        <Card.Body className="d-flex flex-column mt-auto py-4">
                            <Card.Title>
                                <h3>Animalias PetCenter</h3>
                            </Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit rem sed ipsa, consequuntur quidem consequatur possimus repudiandae? Cupiditate, recusandae voluptates tempora iste sed, voluptas, aut at quisquam eum minima iusto.</p>
                            </Card.Text>
                            <Button variant="outline-danger" className="mt-auto" href="/vagas">Visitar</Button>{' '}
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
}





