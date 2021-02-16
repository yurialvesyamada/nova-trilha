import { Jumbotron, Container, Row, Button } from 'react-bootstrap';
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
                    <Button variant={"info"} className="rounded mx-auto my-4 btn-block w-25">Anunciar Vagas</Button>
                    <Button variant={"info"} className="rounded mx-auto my-4 btn-block w-25" href="/candidatos">Candidatos</Button>
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