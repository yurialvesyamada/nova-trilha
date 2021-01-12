import { useState, useEffect } from 'react';
import Vagas from '../../Pages/Vagas';
import { Container, Row } from 'react-bootstrap';

export default function Dados() {
    const [dados_api, setDados] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost/nova-trilha/public/api/conexao.php")
            const dados = await response.json()
            setDados(dados);
        }
        fetchData();
    }, []);

}

return (
    <Row>
        <h1>Hello World!</h1>
    </Row>
)