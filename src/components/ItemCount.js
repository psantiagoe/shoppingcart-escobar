import { React, useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";

const ItemCount = (props) => {
	const [contador, setContador] = useState(props.initial);

	const sumar = () => {
		setContador(contador + 1);
	};

	const restar = () => {
		if (contador !== 0) {
			setContador(contador - 1);
		}
	};

	return (
		<Container className="item-count">
			<Row>
				<p>Stock: {props.stock}</p>
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
			<Button variant="outline-primary" onClick={props.onAdd}>
				Agregar al carrito
			</Button>
		</Container>
	);
};

export default ItemCount;
