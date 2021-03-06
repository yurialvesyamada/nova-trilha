import { Carousel, Image } from 'react-bootstrap';
import saopaulo from '../../assets/img/saopaulo.jpg';
import maos from '../../assets/img/3maos.jpg';
import pes from '../../assets/img/pes.jpg';
import teste from '../../assets/img/logoteste.jpg'
import './Home.css';
import { Link } from 'react-router-dom';



export default function Carrousel() {

    return (


        <Carousel>
            <Carousel.Item interval={1500} >
                <Image
                    className="d-block w-100"
                    src={saopaulo}
                    alt="First slide" />
                <Carousel.Caption className="justify-content-center d-none d-md-block color-dark p-3 rounded border">
                    <h1 className="h1">Diferencial</h1>
                    <h5 className="h6">Propostas de emprego aqui cadastradas estão visíveis a candidata, tendo as vagas exclusividade em contratar candidatas
                    Egressas do Sistema Prisional de São Paulo.</h5>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
                <Image
                    className="d-block w-100"
                    src={maos}
                    alt="Second slide"
                />
                <Carousel.Caption className="justify-content-center d-none d-md-block color-dark p-3 rounded border">
                    <h1 className="h1">Oportunidade</h1>
                    <h5 className="h6">Com o site  "Nova Trilha" é possível que egressas possam encontrar oportunidades de trabalho de acordo com seus perfis.
                    A grande vantagem do "Nova Trilha" é o viés social voltado para a inclusão profissional de egressas.</h5>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
                <Image
                    className="d-block w-100"
                    src={pes}
                    alt="Third slide"
                />
                <Carousel.Caption className="justify-content-center d-none d-md-block color-dark p-3 rounded border">
                    <Link to="/parceiros" className="h1 text-white">Parcerias</Link>
                    <h5 className="h6">O Programa "Nova Trilha" oferece parcerias com instituiçoẽs experientes no âmbito de contratação de candidatas egressas, estabelecendo conexões com empresas contratantes com esse perfil social.</h5>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}


