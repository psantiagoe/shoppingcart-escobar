import { React, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button, Table, Container, CloseButton } from "react-bootstrap";
import { contexto } from "../context/CartContext";

const Carrito = () => {
	const resultado = useContext(contexto);
	const { carrito, total, borrarItem, limpiarCarrito } = resultado;

	return (
		<>
			{carrito.length === 0 && (
				<>
					<h3>Actualmente no hay productos en el carrito</h3>
					<NavLink to="/">
						<Button variant="outline-primary" className="m-4">
							Volver al inicio
						</Button>
					</NavLink>
				</>
			)}
			{carrito.length > 0 && (
				<Container id="carrito">
					<div className="carrito-btns">
						<Button variant="outline-danger" className="m-2" onClick={limpiarCarrito}>
							Limpiar carrito
						</Button>
					</div>
					<Table responsive hover>
						<thead>
							<tr>
								<th></th>
								<th>Producto</th>
								<th>Precio</th>
								<th>Cantidad</th>
								<th>Subtotal</th>
								<th className="borrar"></th>
							</tr>
						</thead>
						<tbody>
							{carrito.map((item) => {
								return (
									<tr key={item.id}>
										<td className="align-middle">
											<img src={item.img} />
										</td>
										<td className="align-middle">{item.nombre}</td>
										<td className="align-middle">$ {item.precio}</td>
										<td className="align-middle">{item.cantidad}</td>
										<td className="align-middle">$ {item.precio * item.cantidad}</td>
										<td className="align-middle">
											<CloseButton onClick={() => borrarItem(item.id)} />
										</td>
									</tr>
								);
							})}
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td className="text-end carrito-total">Total:</td>
								<td className="align-middle carrito-total">$ {total}</td>
								<td></td>
							</tr>
						</tbody>
					</Table>
					<div className="carrito-btns">
						<Button variant="outline-primary" className="m-2">
							Finalizar compra
						</Button>
					</div>
				</Container>
			)}
		</>
	);
};

export default Carrito;
