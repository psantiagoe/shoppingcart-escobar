import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const Item = (props) => {
	return (
		<>
			<Col>
				<Card style={{ width: "24rem" }}>
					<Card.Img variant="top" src={props.producto.img} />
					<Card.Body>
						<Card.Title>
							{props.producto.nombre} | $ {props.producto.precio}
						</Card.Title>
						<div className="divider"></div>
						<Card.Text>{props.producto.descripcion}</Card.Text>
					</Card.Body>
					<Button variant="outline-primary" className="m-2">
						Ver detalle
					</Button>
				</Card>
			</Col>
		</>
	);
};

export default Item;
