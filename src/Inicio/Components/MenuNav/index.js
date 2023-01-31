import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MenuNav.css'
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";

function MenuNav(props){

  function salir(){
    localStorage.setItem('nombre','null')
  }
    return(
        <Navbar bg="dark" expand="lg">
      <Container fluid >
        <Navbar.Brand href="" className="text-light"><img width='40px' src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"></img> AprendeE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="togle"/>
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
     
            className="me-4 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/inicio" className="text-light">Home</Nav.Link>
            <Nav.Link href="#action2" className="text-light">Link</Nav.Link>
           
            <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          
          </Nav>
           <NavDropdown title={localStorage.getItem('nombre')} id="navbarScrollingDropdown"  className="me-4 ">
              <NavDropdown.Item href="/perfil">Mi perfil</NavDropdown.Item>
              <NavDropdown.Item href="/config">
                Configuracion
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={salir}>
                Salir
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export {MenuNav}