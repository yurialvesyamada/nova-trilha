import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';

function BaseMenu(props) {
    const { location } = props;
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] === variable) { return pair[1]; }
        }
        return (false);
    }
    var nomeLogin = getQueryVariable("nome");



    return (

        <>
            <Navbar className="navbar-dark py-2 bg-danger text-center" expand="lg">
                <Navbar.Brand as={Link} to="/">
                    <img src="/assets/img/nova-trilha-logo-white.png" width="55px" title="&copy; Nova Trilha" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey={location.pathname} >
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

                    <Container fluid>
                        <Nav.Item className="ml-auto">
                            {(() => {
                                if (nomeLogin) {
                                    return (

                                        <>
                                            <div className="m-auto h4 shadow-sm text-white rounded">
                                                <i class="fas fa-user-circle" title={nomeLogin}></i> {nomeLogin}
                                            </div>
                                            <Button href="/" className="btn-light ml-5 text-danger" title="Clique para sair">Logout</Button>
                                        </>
                                    )
                                } else {
                                    return (
                                        <>
                                            <Button href="/login" className="btn-light mx-1 text-danger">Entrar</Button>
                                            <Button href="/cadastro" className="btn-danger btn-outline-light mx-1">Cadastro</Button>
                                        </>

                                    )
                                }
                            })()}

                        </Nav.Item>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

const Menu = withRouter(BaseMenu)

export default Menu;









