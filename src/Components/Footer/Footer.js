import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';



export default function Rodape() {
  return (
    <>
      <footer className="bg-danger text-white link-white py-5">
        <Container>
          <Row className="text-center">
            <Col className="m-auto" sm={12} md={3} lg={3}>
              <a href="/Home">
                <img src="/assets/img/nova-trilha-logo2.png" width="130px" title="&copy; Nova Trilha" />
              </a>
            </Col>

            <Col className="my-auto" sm={12} md={3} lg={2}>

              <div className="h5 pb-2">Inicio</div>
              <ul>
                <li>
                  <a href="/Home">Home</a>
                </li>
                <li>
                  <a href="/Vagas">Vagas</a>
                </li>
                <li>
                  {/* Colocar Link */}
                  <a href="#">Capacitação</a>
                </li>
              </ul>
            </Col>

            <Col className="my-auto" sm={12} md={3} lg={2}>

              <div className="h5 pb-2">Nova Trilha</div>
              <ul>
                <li>
                  <a href="/Login">Entrar</a>
                </li>
                <li>
                  <a href="Cadastro">Cadastre-se</a>
                </li>
                <li title="#">Para Empresas</li>
              </ul>
            </Col>

            <Col className="my-auto" sm={12} md={3} lg={2}>

              <div className="h5 pb-2">Suporte</div>
              <ul>
                <li>
                  <a href="#">Fale Conosco</a>
                </li>
                <li>
                  <a href="/Parceiros">Parceiros</a>
                </li>
                <li title="#">Sobre Nós</li>
              </ul>
            </Col>


            <Col className="m-auto" sm={12} md={3} lg={3}>
              <div className="text-center">
                <a href="" target="_blank" title="LinkedIn" className="linkedin"><i
                  className="fa fa-3x mx-2 fa-linkedin text-light"></i></a>
                <a href="" target="_blank" title="Facebook" className="facebook"><i
                  className="fa fa-3x mx-2 fa-facebook text-light"></i></a>
                <a href="" target="_blank" title="Twitter" className="twitter"><i
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







