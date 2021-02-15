import { Card, Button } from 'react-bootstrap';
import '../../Pages/Pages.css';
import { useState } from 'react';

export default function Dados(props) {

    const [fundo, setFundo] = useState("outline-danger")
    const [texto, setTexto] = useState("Candidatar-se")
    const mudar = () => {
        if (fundo === "success") {
            setFundo("outline-danger")
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
                <Card.Body className="d-flex flex-column mt-auto">
                    <Card.Title className="py-4">
                        <span className="h3 font-weight-bold">{props.vaga}</span>
                    </Card.Title>
                    <Card.Text>
                        <span>{props.descricao}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className="h4">R${props.salario}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className="h4">{props.localizacao}</span>
                    </Card.Text>
                    <Button variant={fundo} className="mt-auto" onClick={() => mudar()}>{texto}</Button>{' '}
                </Card.Body>
            </Card>
        </>
    )
}




