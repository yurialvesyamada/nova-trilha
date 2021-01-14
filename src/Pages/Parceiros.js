import React from 'react';
import './Pages.css';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import logo_advocacia from '../Components/Vagas/empresas-img/logo_advocacia.png';

export default function Parceiros() {
    return (
        <>
            <Container className="text-center bg-light font" fluid>
                <div className="py-4">
                    <h1>Empresas Parceiras</h1>
                </div>
                <Row>
                    <Col>
                        <Card className="mx-auto shadow-sm bg-white rounded my-4" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={logo_advocacia} alt="Empresas Parceiras" className="w-100" />
                        <Card.Body className="d-flex flex-column mt-auto">
                            <Card.Title>
                            <h3>Menezes  Advogados</h3>
                            </Card.Title>
                            <Card.Text>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit rem sed ipsa, consequuntur quidem consequatur possimus repudiandae? Cupiditate, recusandae voluptates tempora iste sed, voluptas, aut at quisquam eum minima iusto.</p>
                            </Card.Text>
                            <Button variant="outline-danger" className="mt-auto" href="/vagas">Visitar</Button>{' '}
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}





