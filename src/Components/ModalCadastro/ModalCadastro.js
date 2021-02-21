import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import '../../Pages/Pages.css';


export default function ModalCadastro() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div>
        <Button variant="light" className="rounded text-info w-100" onClick={handleShow}>
          Cadastro
        </Button>

        <Modal show={show} onHide={handleClose} className="text-center text-info">
          <Modal.Header className="bg-info">
            <h1 className="h5 text-light mx-auto">&copy; Nova Trilha</h1>
          </Modal.Header>

          <Modal.Body className="bg-light shadow-sm">
            <h1 className="py-4 h1">Cadastrar como</h1>
          </Modal.Body>

          <Modal.Footer className="bg-info" >
            <div className="mx-auto d-inline">
              <Button to="/Cadastro" as={Link} variant="light" className="text-info rounded" onClick={handleClose}>
                Candidata
                  </Button>
            </div>
            <div className=" mx-auto d-inline">
              <Button to="/Cadastro_empresa" as={Link} variant="light" className="text-info rounded" onClick={handleClose}>
                Empresa
            </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}





