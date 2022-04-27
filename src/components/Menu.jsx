import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">Obras de artes</Navbar.Brand>

          <Nav className="me-auto">
            <Link className="nav-link" to="/home">Home</Link>

            <NavDropdown title="Galeria de arte" id="nav-dropdown">
              <NavDropdown.Item href="/pages/filmes/FilmesPopulares">{}</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
