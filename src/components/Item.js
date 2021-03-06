import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Item = ({ producto }) => {
	return (
		<>
			<Col>
				<Card style={{ width: "24rem" }}>
					<Card.Img variant="top" src={producto.img} />
					<Card.Body>
						<Card.Title>
							{producto.nombre} | $ {producto.precio}
						</Card.Title>
						<div className="divider"></div>
						<Card.Text>{producto.descripcion}</Card.Text>
					</Card.Body>
					<NavLink to={`/producto/${producto.id}`}>
						<Button variant="outline-primary" className="m-2">
							Ver detalle
						</Button>
					</NavLink>
				</Card>
			</Col>
		</>
	);
};

export default Item;
