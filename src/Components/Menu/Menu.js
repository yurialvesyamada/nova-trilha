import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';

function BaseMenu(props) {
    const { location } = props;
    return (
        <Navbar className="navbar-dark py-3 bg-danger" expand="lg">
            <Navbar.Brand as={Link} to="/Home">
                <img src="/assets/img/nova-trilha-logo-white.png" width="55px" title="&copy; Nova Trilha" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">
                    <Nav.Item>
                        <Nav.Link as={Link} href="/home" to="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/vagas" to="/vagas">Vagas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/login" to="/login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/cadastro" to="/cadastro">Cadastro</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/recuperar-senha" to="/recuperar-senha">Recuperar senha</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/parceiros" to="/parceiros">Parceiros</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu)

export default Menu;

