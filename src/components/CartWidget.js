import { React, useContext } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { contexto } from "../context/CartContext";

const CartWidget = () => {
	const resultado = useContext(contexto);
	const { cantidad } = resultado;

	return (
		<NavLink to="/carrito">
			<Button variant="outline-primary">
				<FontAwesomeIcon icon={faCartShopping} className="shopping-cart" />
				<span className="badge badge-primary">{cantidad}</span>
			</Button>
		</NavLink>
	);
};

export default CartWidget;
