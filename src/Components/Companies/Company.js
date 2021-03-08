import { Card, Button } from 'react-bootstrap';
import '../../Pages/Pages.css';
import { useState } from 'react';

export default function CadastroVaga(props) {

    const [fundo, setFundo] = useState("info")
    const [texto, setTexto] = useState("Finalizar")
    const mudar = () => {
        if (fundo === "info") {
            setFundo("secondary")
            setTexto("Reabrir")
        } else {
            setFundo("info")
            setTexto("Finalizar")
        }
    }


    return (
        <>
            <Card className="mx-auto shadow-sm rounded my-4" style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src={require(`../Vagas/empresas-img/${props.imagem}`).default} alt="Empresas Contratantes" className="w-100 border-bottom" title={props.empregador} /> */}
                <Card.Body className="d-flex flex-column mt-auto">
                    <Card.Title className="py-3">
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
                </Card.Body>
                <Card.Footer>
                    <Button variant={"outline-info"} className="btn-block my-3" title="Editar Vaga">Editar</Button>
                    <Button variant={fundo} className="btn-block my-3" title="Finalizar Processo Seletivo" onClick={() => mudar()}>{texto}</Button>
                </Card.Footer>
            </Card>
        </>
    )
}




