import React from 'react';
import { Jumbotron, Container, Form, Row } from 'react-bootstrap';
import './Pages.css';
import Dados from '../Components/Vagas/Dados';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

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
        <>
            <Jumbotron className="text-center text-light my-auto w-100 jobs" fluid>
                <Container className="py-5" fluid>
                    <h1 className="d-none d-lg-inline-flex display-1">Nova Trilha</h1>
                    <h1 className="d-lg-none d-block h1">Nova Trilha</h1>
                    <h4 className="my-5">Procure uma oportunidade de emprego</h4>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="search" placeholder="Ex.: Recepcionista, Secretaria" className="d-none d-lg-inline-flex w-50" />
                            <Form.Control type="search" placeholder="Ex.: Recepcionista, Secretaria" className="d-lg-none d-inline-flex" />
                            <br />
                            <a href="#vagas" className="btn btn-light mx-auto my-5">Pesquisar</a>
                        </Form.Group>
                    </Form>
                </Container>
            </Jumbotron>



            <Container className="text-center bg-light" fluid>

                <div className="py-4">
                    <h1 id="vagas">Vagas Publicadas</h1>
                </div>
                <Row>
                    {apiVagas && apiVagas.map(item => <Dados key={item.id} imagem={item.imagem} vaga={item.vaga} descricao={item.descricao} empregador={item.empregador} salario={item.salario} localizacao={item.localizacao}
                    />)}
                </Row>
            </Container>
        </>
    );
}
