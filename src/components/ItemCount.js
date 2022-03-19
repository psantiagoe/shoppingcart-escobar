import { React, useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";

const ItemCount = ({ initial, stock, onAdd }) => {
	const [contador, setContador] = useState(initial);

	const sumar = () => {
		if (contador < stock) {
			setContador(contador + 1);
		}
	};

	const restar = () => {
		if (contador > initial) {
			setContador(contador - 1);
		}
	};

	const confirmar = () => {
		onAdd(contador);
	};

	return (
		<Container className="item-count">
			<Row>
				<p>Stock: {stock}</p>
			</Row>
			<Row md="3" className="control-container">
				<Col xs="auto">
					<button className="control" onClick={restar}>
						-
					</button>
				</Col>
				<Col xs="auto">
					<span>{contador}</span>
				</Col>
				<Col xs="auto">
					<button className="control" onClick={sumar}>
						+
					</button>
				</Col>
			</Row>
			<Button variant="outline-primary" onClick={confirmar}>
				Agregar al carrito
			</Button>
		</Container>
	);
};

export default ItemCount;
