import { Card, Button } from 'react-bootstrap';
import '../../Pages/Pages.css';
import { useState } from 'react';

export default function Dados(props) {
    
    const [fundo, setFundo] = useState("outline-danger")
    const [texto, setTexto] = useState("Candidatar-se")
    const mudar = () => {
        if (fundo == "success") {
            setFundo("outline-danger")
            setTexto("Candidatar-se")
        } else {
            
            setFundo("success")
            setTexto("Candidatado")
        }
    }



    return (
        <>
            <Card className="mx-auto shadow-sm bg-white rounded my-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require(`./empresas-img/${props.imagem}`).default} alt="Empresas Contratantes" className="w-100" />
                <Card.Body className="d-flex flex-column mt-auto">
                    <Card.Title>
                        <h3>{props.vaga}</h3>
                    </Card.Title>
                    <Card.Text>
                        <p className="my-3">{props.descricao}</p>
                    </Card.Text>
                    <Card.Text>
                        <h4 className="my-3">R${props.salario}</h4>
                    </Card.Text>
                    <Card.Text>
                        <h4 className="my-3">{props.localizacao}</h4>
                    </Card.Text>
                    <Button variant={fundo} className="mt-auto" onClick={() => mudar()}>{texto}</Button>{' '}
                </Card.Body>
            </Card>
        </>
    )
}




