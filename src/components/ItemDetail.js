import { React, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Spinner, Image, Button, Container, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { contexto } from "../context/CartContext";

const ItemDetail = ({ producto, loading }) => {
	const [showCounter, setShowCounter] = useState(true);
	const [cantidad, setCantidad] = useState(0);

	const resultado = useContext(contexto);
	const { agregarItem } = resultado;

	const onAdd = (contador) => {
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
									producto.
								</p>
								<NavLink to="/carrito">
									<Button
										variant="outline-primary"
										className="m-2"
										onClick={() => {
											agregarItem(
												producto.id,
												producto.img,
												producto.nombre,
												cantidad,
												producto.precio
											);
										}}
									>
										Confirmar compra
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
