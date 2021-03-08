import Candidate from '../Components/Candidaturas/Candidate';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Candidatas() {
    return (
        <>
            <Container className="text-center bg-light" fluid>
                <h1 className="py-4">Candidaturas</h1>
                <Candidate />
                <Link to="/empresas" className="btn btn-info rounded my-4">Minhas Vagas</Link>
            </Container>
        </>
    )
}
