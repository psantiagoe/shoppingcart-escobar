import React from "react";
import { Container } from "react-bootstrap";

const CheckoutItem = ({ producto }) => {
	return (
		<Container className="d-flex m-auto mb-1 p-1 justify-content-between border checkout-item">
			<img src={producto.img} />
			<div className="w-75 text-start item-text">
				<strong>{producto.nombre}</strong>
				<p className="m-0">
					<strong>Cantidad:</strong> {producto.cantidad}
				</p>
				<p className="m-0">
					<strong>Precio:</strong> $ {producto.precio}
				</p>
			</div>
		</Container>
	);
};

export default CheckoutItem;
