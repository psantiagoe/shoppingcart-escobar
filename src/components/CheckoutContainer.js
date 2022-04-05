import React, { useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import CheckoutList from "./CheckoutList";
import { contexto } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
	const resultado = useContext(contexto);
	const { carrito, total, enviarCarrito, pedidoId } = resultado;

	const navigate = useNavigate();

	const precioEnvio = 150;
	const newTotal = total + precioEnvio;

	const handleSubmit = (e) => {
		e.preventDefault();
		const nombre = e.target.form.formNombre.value;
		const email = e.target.form.formEmail.value;
		const telefono = e.target.form.formTelefono.value;
		const direccion = e.target.form.formDireccion.value;

		enviarCarrito(nombre, email, telefono, direccion, newTotal);

		navigate("/Thanks");
	};

	return (
		<Container className="d-flex checkout-container">
			<Form className="envio-form p-2">
				<h3 className="titulo">1. Envio</h3>
				<Form.Group className="mb-3" controlId="formNombre">
					<Form.Label>Nombres y Apellido:</Form.Label>
					<Form.Control type="text" placeholder="Ej. Juan Carlos" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formEmail">
					<Form.Label>Email:</Form.Label>
					<Form.Control type="email" placeholder="Ej. ejemplo@email.com" />
					<Form.Text className="text-muted">Nunca compartiremos tu email con nadie.</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formTelefono">
					<Form.Label>Teléfono:</Form.Label>
					<Form.Control type="text" placeholder="(sin 0 y sin 15) Ej. 1140506070" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formDireccion">
					<Form.Label>Dirección de envío:</Form.Label>
					<Form.Control type="text" placeholder="Ej. Av. Siempreviva 123" />
				</Form.Group>

				<Button variant="outline-primary" type="submit" className="mt-3" onClick={handleSubmit}>
					Pagar
				</Button>
			</Form>

			<div className="d-flex flex-column align-items-center p-2 summary-checkout">
				<div className="w-100 p-2">
					<h3 className="titulo">2. Resumen</h3>
					<div className="d-flex flex-column align-items-start p-2 total-container">
						<div className="d-flex justify-content-between w-100">
							<span>Subtotal:</span>
							<span className="align-self-end">$ {total}</span>
						</div>
						<div className="d-flex justify-content-between w-100">
							<span>Envío:</span>
							<span>$ {precioEnvio}</span>
						</div>
						<div className="divider"></div>
						<div className="d-flex justify-content-between w-100 total">
							<span>Total:</span>
							<span>$ {newTotal}</span>
						</div>
					</div>
				</div>

				<div className="w-100 p-2 mt-3">
					<h3 className="titulo">3. En tu carrito</h3>
					<div className="d-flex flex-column align-items-center overflow-auto p-2 lista-productos">
						<CheckoutList carrito={carrito} />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Checkout;
