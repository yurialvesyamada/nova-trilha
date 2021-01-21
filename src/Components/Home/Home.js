import { Carousel, Button } from 'react-bootstrap';
import FundoComLogo from './fundocomlogo3.svg';
import FundoComLogo2 from './fundoquadrado2.svg';
import Mulher1 from './mulher_retangulo2.png';


import './Home.css';

export default function Carrousel() {

    return (


        <Carousel >
            <Carousel.Item interval={1000} >
                <img
                    className="d-block w-100"
                    src={FundoComLogo}
                    alt="First slide" />
                <Carousel.Caption className="justify-content-center text-dark d-none d-md-block">


                    <h3>Oportunidade</h3>
                    <p>Propostas de emprego aqui cadastradas estão visíveis ao
                    usuário, tendo as vagas exclusividade em contratar candidatos
                    Egressos do Sistema Prisional.</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 py-5"
                    src={Mulher1}
                    alt="Third slide"
                />
                <Carousel.Caption className="justify-content-center text-dark d-none d-md-block">
                    <h3>Vantagem</h3>
                    <p>Com o site  "Nova Trilha" é possível que egressos possam encontrar oportunidades de trabalho de acordo com seus perfis.
                    A grande vantagem do "Nova Trilha" é o viés social voltado para a inclusão profissional de egressas.</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item >
                <img
                    className="w-100 d-none d-lg-block"
                    src={FundoComLogo}
                    alt="Third slide"
                />
                <img
                    className="w-100 d-lg-none"
                    src={FundoComLogo2}
                    alt="Third slide"
                />

                <Carousel.Caption className="d-flex flex-column text-center text-dark w-25 mx-auto">


                    <Button variant="danger" href="./login" className="my-0 d-block">Login</Button>{' '}

                    <Button variant="danger" href="./cadastro" className="my-3 d-block">Cadastro</Button>{' '}

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}