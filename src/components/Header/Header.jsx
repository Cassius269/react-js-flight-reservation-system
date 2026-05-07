import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../assets/styles/layouts/Header.module.scss";

function Header() {
  return (
    <>
      <header>
        <Navbar
          expand="lg"
          fixed="top"
          bg="primary"
          variant="dark"
          className="pt-4 pb-4"
        >
          <Container fluid>
            <Navbar.Brand href="#" style={{ flex: 1 }}>
              Accueil
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar" className="justify-content-end">
              <Nav
                className="d-flex justify-content-between"
                style={{ flex: 1 }}
              >
                <Nav.Link className="bg-white text-dark" href="#">
                  Rechercher des vols
                </Nav.Link>
                <div className="d-flex gap-5">
                  <Nav.Link className="bg-white text-dark ps-4 pe-4" href="#">
                    Contacter
                  </Nav.Link>
                  <Nav.Link className="bg-white text-dark ps-4 pe-4" href="#">
                    S'inscrire
                  </Nav.Link>
                  <Nav.Link
                    className="bg-primary-subtle text-dark ps-4 pe-4"
                    href="#"
                  >
                    Se connecter
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
