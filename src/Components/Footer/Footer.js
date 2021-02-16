import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { Link, withRouter } from 'react-router-dom';


function Footer() {
  return (
    <>
      <Container className="text-white link-white p-5 bg-danger" fluid>
        <Row className="text-center">
          <Col className="m-auto" sm={12} md={3} lg={3}>
            <a href="/">
              <img src="/assets/img/nova-trilha-logo-white.png" alt="Nova-Trilha Logo" className="shadow-sm bg-white rounded" width="130px" title="&copy; Nova Trilha" />
            </a>
          </Col>

          <Col className="my-auto" sm={12} md={3} lg={2}>

            <div className="h4 pb-2">Inicio</div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/vagas">Vagas</Link>
              </li>
              <li>
                <a href="https://www.facebook.com/Nova-Trilha-106093058111607" target="_blank" rel="noopener noreferrer">Capacitação</a>
              </li>
            </ul>
          </Col>

          <Col className="my-auto" sm={12} md={3} lg={2}>

            <div className="h4 pb-2">Nova Trilha</div>
            <ul>
              <li>
                <Link to="/login">Entrar</Link>
              </li>
              <li>
                <Link to="cadastro">Cadastre-se</Link>
              </li>
              <li>
                <Link to="/company">Para Empresas</Link>
              </li>
            </ul>
          </Col>

          <Col className="my-auto" sm={12} md={3} lg={2}>

            <div className="h4 pb-2">Suporte</div>
            <ul>
              <li>
                <a href="https://www.facebook.com/Nova-Trilha-106093058111607" target="_blank" rel="noopener noreferrer">Fale Conosco</a>
              </li>
              <li>
                <Link to="/parceiros">Parceiros</Link>
              </li>
              <li>
                <a href="https://www.facebook.com/Nova-Trilha-106093058111607" target="_blank" rel="noopener noreferrer">Sobre Nós</a>
              </li>
            </ul>
          </Col>

          <Col className="m-auto" sm={12} md={6} lg={3}>
            <a href="https://github.com/yurialvesyamada/nova-trilha" target="_blank" rel="noopener noreferrer" title="GitHub" className="github"><i
              className="fa fa-3x mx-2 fa-github text-light"></i></a>
            <a href="https://www.facebook.com/Nova-Trilha-106093058111607" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="linkedin"><i
              className="fa fa-3x mx-2 fa-linkedin text-light"></i></a>
            <a href="https://www.facebook.com/Nova-Trilha-106093058111607" target="_blank" rel="noopener noreferrer" title="Facebook" className="facebook"><i
              className="fa fa-3x mx-2 fa-facebook text-light"></i></a>
          </Col>

        </Row>
      </Container>
      <footer className="py-2 bg-dark text-white text-center" title="&copy; 2021 Nova Trilha">
        &copy; 2021 Nova Trilha
      </footer>
    </>
  )
}

export default withRouter(Footer)






