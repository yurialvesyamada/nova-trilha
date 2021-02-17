import { Jumbotron, Container, Row, Button, Col } from 'react-bootstrap';
import React from 'react';
import CadastroVaga from '../Components/Companies/Company';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Empresas() {
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
            <Jumbotron className="text-center text-white bg-light my-auto w-100 jobs" fluid>
                <Container className="py-5" fluid>
                    <h1 className="display-1 font">Vagas Cadastradas</h1>
                    <h3 className="my-5">Anuncie a sua vaga GRÁTIS!</h3>
                    <Row className="justifity-content-center">
                        <Col>
                            <Button variant={"light"} lg={3} /*  size="lg" */ className="rounded my-4 text-dark mx-2">Anunciar Vagas</Button>
                            <Button variant={"light"} lg={3} /*  size="lg" */ className="rounded my-4 text-dark mx-2" href="/candidatas">Candidatas</Button>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>


            <Container className="text-center bg-light pt-5" fluid>
                <Row>
                    {apiVagas && apiVagas.map(item => <CadastroVaga key={item.id} imagem={item.imagem} vaga={item.vaga} descricao={item.descricao} empregador={item.empregador} salario={item.salario} localizacao={item.localizacao}
                    />)}
                </Row>
            </Container>
        </>

    )
}