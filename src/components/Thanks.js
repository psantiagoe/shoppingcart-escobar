import React, { useContext } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { contexto } from "../context/CartContext";
import thanks from "../assets/img/thanks.jpg";

const Thanks = () => {
	const resultado = useContext(contexto);
	const { pedidoId, uploadingCart } = resultado;

	return (
		<>
			{uploadingCart && <Spinner animation="border" variant="warning" />}
			{!uploadingCart && (
				<Container className="thanks-container">
					<Row className="mb-5">
						<Col>
							<img src={thanks} alt="Gracias por tu compra" className="thanks-img" />
						</Col>
					</Row>
					<Row>
						<Col>
							<h1 className="thanks-title">Gracias por tu compra!</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<p className="thanks-text">
								Tu pedido ha sido enviado con éxito.
								<br />
								Tu pedido tiene el número de seguimiento:
								<br />
								<span className="thanks-number">{pedidoId}</span>
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<NavLink to="/">
								<Button variant="outline-primary" className="thanks-button">
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
