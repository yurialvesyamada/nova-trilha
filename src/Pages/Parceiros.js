import React from 'react';
import './Pages.css';
import { Container, Row, Card, Button } from 'react-bootstrap';
import logo_recomecar from '../Components/Vagas/empresas-img/logo_recomecar.png';


export default function Parceiros() {
    return (
        <>
            <Container className="text-center bg-light font" fluid>
                <div className="py-4">
                    <h1 className="h1">Instituiçoẽs Parceiras</h1>
                </div>
                <Row>
                    <Card className="mx-auto shadow-sm bg-white rounded my-4" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={logo_recomecar} alt="Empresas Parceiras" className="w-100 bg-dark" title="Recomeçar Gerando Falcoẽs" />
                        <Card.Header className="bg-info text-white">
                            <Card.Title>
                                <h2>Recomeçar</h2>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="py-3">
                            <Card.Text>
                                <span>Recomeçar é um projeto da rede Gerando Falcões, criado em 2015, com o objetivo de reintegrar à sociedade homens e mulheres, egressos de penitenciárias e presídios, que cumpriram suas penas e carecem de apoio para dar um novo rumo à vida.</span>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="info" className="btn-block" href="https://gerandofalcoes.com/recomecar" target="_blank" rel="noopener noreferrer">Visitar</Button>{' '}
                        </Card.Footer>
                    </Card>
                </Row>
            </Container>
        </>
    );
}





