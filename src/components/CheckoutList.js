import React from "react";
import CheckoutItem from "./CheckoutItem";

const CheckoutList = ({ carrito }) => {
	return (
		<>
			{carrito.map((producto) => (
				<CheckoutItem key={producto.id} producto={producto} />
			))}
		</>
	);
};

export default CheckoutList;
