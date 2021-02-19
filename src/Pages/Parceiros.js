import React from 'react';
import './Pages.css';
import { Container, Row, Card, Button } from 'react-bootstrap';
import logo_novarota from '../Components/Vagas/empresas-img/logo_novarota.jpg';
import logo_afroreggae from '../Components/Vagas/empresas-img/logo_afroreggae.jpg';
import logo_parcas from '../Components/Vagas/empresas-img/logo_parcas.png';


export default function Parceiros() {
    return (
        <>
            <Container className="text-center bg-light font" fluid>
                <div className="py-4">
                    <h1>Instituiçoes Parceiras</h1>
                </div>
                <Row className="px-5">
                    <Card className="mx-auto shadow-sm bg-white rounded my-4" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={logo_novarota} alt="Empresas Parceiras" className="w-100 border" />
                        <Card.Header className="bg-info text-white">
                            <Card.Title>
                                <h3>Nova Rota</h3>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="py-3">
                            <Card.Text>
                                <span>O Nova Rota é uma associação, sem fins lucrativos, criada por ex-alunos da USP, que oferece bolsas de estudos, mentoria e apoio multidisciplinar a pessoas egressas do sistema carcerário </span>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-info" className="btn-block" href="https://en.projetonovarota.org/" target="_blank" rel="noopener noreferrer">Visitar</Button>{' '}
                        </Card.Footer>
                    </Card>

                    <Card className="mx-auto shadow-sm bg-white rounded my-4" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={logo_afroreggae} alt="Empresas Parceiras" className="w-100 border" />
                        <Card.Header className="bg-info text-white">
                            <Card.Title>
                                <h3>Afroreggae</h3>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="py-3">
                            <Card.Text>
                                <span>Grupo Cultural AfroReggae é uma organização não governamental fundada em 1993 com a missão de promover a inclusão e a justiça social por meio da arte, da cultura afro-brasileira e da educação. O grupo tem como um dos principais objetivos despertar potencialidades artísticas de jovens das camadas populares.</span>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-info" className="btn-block" href="http://www.afroreggae.org/" target="_blank" rel="noopener noreferrer">Visitar</Button>{' '}
                        </Card.Footer>
                    </Card>

                    <Card className="mx-auto shadow-sm bg-white rounded my-4" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={logo_parcas} alt="Empresas Parceiras" className="w-100 border" />
                        <Card.Header className="bg-info text-white">
                            <Card.Title>
                                <h3>Parças</h3>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="py-3">
                            <Card.Text>
                                <span>Há 3 anos promovemos uma nova forma de fazer desenvolvedores
                                e o sucesso de empresas que resolvem desafios e criam produtos
                                com tecnologia no país.
                                Queremos ressignificar o papel de empresas como um instrumento
                                de geração de impacto e estimular que tenham uma gestão
                                humana com diversidade e recorte de gênero.
                                </span>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-info" className="btn-block" href="https://parcas.com.br/" target="_blank" rel="noopener noreferrer">Visitar</Button>{' '}
                        </Card.Footer>
                    </Card>





                </Row>
            </Container>
        </>
    );
}





