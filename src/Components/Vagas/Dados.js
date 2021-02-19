import { Card, Button } from 'react-bootstrap';
import '../../Pages/Pages.css';
import { useState } from 'react';

export default function Dados(props) {

    const [fundo, setFundo] = useState("outline-info")
    const [texto, setTexto] = useState("Candidatar-se")
    const mudar = () => {
        if (fundo === "success") {
            setFundo("outline-info")
            setTexto("Candidatar-se")
        } else {

            setFundo("success")
            setTexto("Candidatado")
        }
    }



    return (
        <>
            <Card className="mx-auto shadow-sm rounded my-4" style={{ width: '22rem' }}>
                <Card.Img variant="top" src={require(`./empresas-img/${props.imagem}`).default} alt="Empresas Contratantes" className="w-100" />
                <Card.Header className="py-4">
                    <Card.Title>
                        <span className="h3 font-weight-bold">{props.vaga}</span>
                    </Card.Title>
                </Card.Header>
                <Card.Body className="d-flex flex-column py-5">
                    <Card.Text>
                        <span className="h5">{props.descricao}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className="h4">R${props.salario}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className="h4">{props.localizacao}</span>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant={fundo} className="btn-block" onClick={() => mudar()}>{texto}</Button>
                </Card.Footer>{' '}
            </Card>
        </>
    )
}




