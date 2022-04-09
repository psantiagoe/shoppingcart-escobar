import { React, useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap/";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/foodi-logo.svg";
import CartWidget from "./CartWidget";
import { contexto } from "../context/CartContext";

const NavBar = () => {
	const resultado = useContext(contexto);
	const { cantidad } = resultado;

	return (
		<header>
			<Navbar fixed="top" bg="light" expand="lg">
				<Container>
					<NavLink to="/">
						<img alt="Foodi logo" src={logo} className="d-inline-block align-top" />
					</NavLink>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="m-auto">
							<NavLink to="/">Home</NavLink>
							<NavLink to="/categoria/entradas">Entradas</NavLink>
							<NavLink to="/categoria/platos-principales">Platos Principales</NavLink>
							<NavLink to="/categoria/postres">Postres</NavLink>
							<NavLink to="/categoria/bebidas">Bebidas</NavLink>
						</Nav>
					</Navbar.Collapse>
					{cantidad > 0 && <CartWidget />}
				</Container>
			</Navbar>
		</header>
	);
};

export default NavBar;
