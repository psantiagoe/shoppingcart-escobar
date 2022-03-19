import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { Spinner, Image, Button, Container, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto, loading }) => {
	const [showCounter, setShowCounter] = useState(true);
	const [cantidad, setCantidad] = useState(0);

	const onAdd = (contador) => {
		console.log(`onAdd ejecutado. Contador: ${contador}`);
		setShowCounter(false);
		setCantidad(contador);
	};

	return (
		<>
			{loading && <Spinner animation="border" variant="warning" />}
			{!loading && (
				<Container id="detalle">
					<Image src={producto.img} fluid={true} />
					<div className="divider"></div>
					<h1>
						{producto.nombre} | $ {producto.precio}
					</h1>
					<p className="descripcion">{producto.descripcion}</p>
					<div className="divider"></div>
					<Container id="counter">
						{showCounter && <ItemCount initial={1} stock={8} onAdd={onAdd} />}
						{!showCounter && (
							<>
								<p>
									Seleccionaste {cantidad} {cantidad === 1 ? "cantidad" : "cantidades"} de este
									producto.{" "}
								</p>
								<NavLink to="/carrito">
									<Button variant="outline-primary" className="m-2">
										Finalizar compra
									</Button>
								</NavLink>
							</>
						)}
					</Container>
				</Container>
			)}
		</>
	);
};

export default ItemDetail;
