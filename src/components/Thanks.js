import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { contexto } from "../context/CartContext";

const Thanks = () => {
	const resultado = useContext(contexto);
	const { pedidoId } = resultado;

	return (
		<>
			{!pedidoId && <Spinner animation="border" variant="warning" />}
			{pedidoId && (
				<Container>
					<Row>
						<Col>
							<h1>
								Tu compra se ha realizado con éxito.
								<br />
								¡Muchas gracias!
							</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<p>
								Tu ID de pedido es: <strong>{pedidoId}</strong>{" "}
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<NavLink to="/">
								<Button variant="outline-primary" className="m-4">
									Volver al inicio
								</Button>
							</NavLink>
						</Col>
					</Row>
				</Container>
			)}
		</>
	);
};

export default Thanks;
