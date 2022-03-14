import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap/";
import logo from "../assets/img/foodi-logo.svg";
import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<Navbar fixed="top" bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">
					<img alt="Foodi logo" src={logo} className="d-inline-block align-top" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Nuestros locales</Nav.Link>
						<NavDropdown title="Categorías" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Entradas</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Platos Principales</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Postres</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Bebidas</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<CartWidget />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
