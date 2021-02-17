import Candidate from '../Components/Candidaturas/Candidate';
import { Container, Button } from 'react-bootstrap';


export default function Candidatas() {
    return (
        <>
            <Container className="text-center bg-light" fluid>
                <h1 className="py-4">Candidaturas</h1>
                <Candidate />

                <Button variant={"info"} className="rounded my-4 mx-2" href="/company">Minhas Vagas</Button>
            </Container>
        </>
    )
}