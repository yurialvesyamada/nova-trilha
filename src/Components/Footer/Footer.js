import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import Cookies1 from '../cookies/'; 



export default function Rodape() {
  return (
    <>
      <Cookies1/>
      <footer className="text-white link-white py-5 bg-danger">
        <Container>
          <Row className="text-center">
            <Col className="m-auto" sm={12} md={3} lg={3}>
              <a href="/">
                <img src="/assets/img/nova-trilha-logo-white.png" className="shadow-sm bg-white rounded" width="130px" title="&copy; Nova Trilha" />
              </a>
            </Col>

            <Col className="my-auto" sm={12} md={3} lg={2}>

              <div className="h5 pb-2">Inicio</div>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/vagas">Vagas</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Nova-Trilha-106093058111607" target="blank_">Capacitação</a>
                </li>
              </ul>
            </Col>

            <Col className="my-auto" sm={12} md={3} lg={2}>

              <div className="h5 pb-2">Nova Trilha</div>
              <ul>
                <li>
                  <a href="/login">Entrar</a>
                </li>
                <li>
                  <a href="cadastro">Cadastre-se</a>
                </li>
                <li>
                  <a href="#">Para Empresas</a>
                </li>
              </ul>
            </Col>

            <Col className="my-auto" sm={12} md={3} lg={2}>

              <div className="h5 pb-2">Suporte</div>
              <ul>
                <li>
                  <a href="https://www.facebook.com/Nova-Trilha-106093058111607" target="blank_">Fale Conosco</a>
                </li>
                <li>
                  <a href="/parceiros">Parceiros</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Nova-Trilha-106093058111607" target="blank_">Sobre Nós</a>
                </li>
              </ul>
            </Col>


            <Col className="m-auto" sm={12} md={3} lg={3}>
              <div className="text-center">
                <a href="https://www.facebook.com/Nova-Trilha-106093058111607" target="_blank" title="LinkedIn" className="linkedin"><i
                  className="fa fa-3x mx-2 fa-linkedin text-light"></i></a>
                <a href="https://www.facebook.com/Nova-Trilha-106093058111607" target="_blank" title="Facebook" className="facebook"><i
                  className="fa fa-3x mx-2 fa-facebook text-light"></i></a>
                <a href="https://www.facebook.com/Nova-Trilha-106093058111607" target="_blank" title="Twitter" className="twitter"><i
                  className="fa fa-3x mx-2 fa-twitter text-light"></i></a>
              </div>
            </Col>

          </Row>
        </Container>
      </footer>
      <div className="py-3 bg-dark text-white text-center" title="&copy; 2021 Nova Trilha">
        &copy; 2021 Nova Trilha
      </div>
    </>
  )
}







