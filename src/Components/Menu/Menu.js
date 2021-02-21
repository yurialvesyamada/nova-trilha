import { Navbar, Nav, Button, Container, Image } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';
import novatrilha from '../../assets/img/nova-trilha-logo2.png';
import woman from '../../assets/img/woman.jpg';
import ModalCadastro from '../ModalCadastro/ModalCadastro';


function Menu(props) {
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
            <Navbar className="navbar-dark py-2 bg-info text-center" expand="lg">
                <Navbar.Brand as={Link} to="/">
                    <Image src={novatrilha} alt="Nova-Trilha" width="70px" title="&copy; Nova Trilha" className="shadow-sm rounded" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey={location.pathname} >
                        <Nav.Item>
                            <Nav.Link as={Link} to="/"><i className="fas fa-home"></i>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/vagas"><i className="fas fa-briefcase"></i>Vagas</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/parceiros"><i className="far fa-handshake"></i>Parceiros</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Container fluid>
                        <Nav.Item className="ml-auto">
                            {(() => {
                                if (nomeLogin) {
                                    return (

                                        <>
                                            <div>
                                                <Link to="/Atualizar_cadastro" className="links text-light h3">
                                                    <Image src={woman} className="woman_img mr-3" roundedCircle />  {nomeLogin}
                                                </Link>
                                            </div>
                                            <Button to="/" as={Link} className="btn-light ml-5 my-auto text-info" title="Clique para sair">Logout</Button>
                                        </>
                                    )
                                } else {
                                    return (
                                        <>

                                            <Button to="/login" as={Link} className="btn-light rounded-pill  mx-1 text-info">Entrar</Button>
                                            <ModalCadastro onClick={ModalCadastro.handleShow} className="mx-1">Cadastro</ModalCadastro>
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

export default withRouter(Menu);









