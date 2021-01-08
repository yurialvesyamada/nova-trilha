import React from 'react';
import { Jumbotron, Container, Row, Col, Form } from 'react-bootstrap';
import './Pages.css';

export default function Vagas() {
    return (
        <>
        <Jumbotron className="text-center text-dark">
            <Container className="py-4" fluid>
                <h1 className="display-2 font">Nova Trilha</h1>
                <h4 className="my-5">Procure uma oportunidade de emprego</h4>
                <Form className="mx-auto w-50"> 
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="search" placeholder="Ex. Segurança, Porteiro." />
                        <a href="/vagas" className="btn btn-danger mx-auto my-4 w-25 font">Pesquisar</a> 
                    </Form.Group>
                </Form>
            </Container>
        </Jumbotron>
        </>
    );
}
