import React from 'react';
import { Jumbotron, Container, Form, Row, Col } from 'react-bootstrap';
import './Pages.css';
import Dados from '../Components/Vagas/Dados';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Vagas(props) {
    const caminho = useSelector(state => state.caminho.caminho)


    const [apiVagas, setDados] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch(`${caminho}/api/vagas.php`)
            const dados = await resposta.json()
            setDados(dados);
        }
        fetchData();
    }, []);

    return (
        <div className="text-center bg-light">

            <Jumbotron className="text-light w-100 my-auto jobs" fluid>
                <Container className="py-5" fluid>
                    <h1 className="d-none d-lg-inline-flex display-1">Nova Trilha</h1>
                    <h1 className="d-lg-none d-block h1">Nova Trilha</h1>
                    <h4 className="py-5">Procure uma oportunidade de emprego</h4>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="search" placeholder="Ex.: Recepcionista, Secretaria" className="d-none d-lg-inline-flex w-50" />
                            <Form.Control type="search" placeholder="Ex.: Recepcionista, Secretaria" className="d-lg-none d-inline-flex" />
                            <Col className="py-5">
                                <a href="#vagas" className="btn btn-light mx-auto">Pesquisar</a>
                            </Col>
                            <Link to="/cadastrar-vaga" className="btn btn-info mx-auto">Cadastrar vaga</Link>
                        </Form.Group>
                    </Form>
                </Container>
            </Jumbotron>

            <Container fluid>
                <div className="py-5">
                    <h1 id="vagas">Vagas Publicadas</h1>
                </div>
                <Row>
                    {apiVagas && apiVagas.map(item => <Dados key={item.id} /* imagem={item.imagem} */ vaga={item.vaga} descricao={item.descricao} empregador={item.empregador} salario={item.salario} localizacao={item.localizacao}
                    />)}
                </Row>
            </Container>
        </div>
    );
}



