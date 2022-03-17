import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
					<NavLink to={"/producto/" + props.producto.id}>
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
