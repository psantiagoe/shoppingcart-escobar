import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
	return (
		<NavLink to="/carrito">
			<Button variant="outline-primary">
				<FontAwesomeIcon icon={faCartShopping} className="shopping-cart" />
			</Button>
		</NavLink>
	);
};

export default CartWidget;
