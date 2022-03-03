import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
	return (
		<Button variant="outline-warning">
			<FontAwesomeIcon icon={faCartShopping} className="shopping-cart" />
		</Button>
	);
};

export default CartWidget;
