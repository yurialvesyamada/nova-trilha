import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';

function BaseMenu(props) {
    const { location } = props;
    return (
        <Navbar className="navbar-dark py-2 bg-danger text-center" expand="lg">
            <Navbar.Brand as={Link} to="/">
                <img src="/assets/img/nova-trilha-logo-white.png" width="55px" title="&copy; Nova Trilha" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey={location.pathname} /* className="ml-auto mr-3" */>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/" to="/"><i className="fas fa-home"></i>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/vagas" to="/vagas"><i className="fas fa-briefcase"></i>Vagas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/parceiros" to="/parceiros"><i className="far fa-handshake"></i>Parceiros</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className="container-fluid">
                    <Nav.Item className="ml-auto">
                        <Button href="/cadastro" className="btn-danger btn-outline-light mx-1">Cadastro</Button>
                        <Button href="/login" className="btn-danger btn-light mx-1 text-danger">Entrar</Button>
                    </Nav.Item>
                </div>

            </Navbar.Collapse>
        </Navbar>   
    )
}

const Menu = withRouter(BaseMenu)

export default Menu;

