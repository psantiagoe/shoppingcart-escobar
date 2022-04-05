import { createContext, useEffect, useState } from "react";
import { db } from "../database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const contexto = createContext();
const { Provider } = contexto;

const CartProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);
	const [total, setTotal] = useState(0);
	const [cantidad, setCantidad] = useState(0);
	const [pedidoId, setPedidoId] = useState("");

	const borrarItem = (id) => {
		let filteredItems = [...carrito];
		filteredItems = filteredItems.filter((el) => {
			return el.id !== id;
		});
		setCarrito(filteredItems);
		return false;
	};

	const agregarItem = (id, img, nombre, cantidad, precio) => {
		let copiaCarrito = [...carrito];

		if (isInCart(id)) {
			copiaCarrito = copiaCarrito.map((el) => {
				let item = {
					id: el.id,
					img: el.img,
					nombre: el.nombre,
					precio: el.precio,
					cantidad: el.cantidad,
				};

				if (el.id === id) {
					item.cantidad += cantidad;
				}

				return item;
			});
		} else {
			const itemNuevo = {
				id: id,
				img: img,
				nombre: nombre,
				cantidad: cantidad,
				precio: precio,
			};
			copiaCarrito.push(itemNuevo);
		}
		setCarrito(copiaCarrito);
	};

	const limpiarCarrito = () => {
		setCarrito([]);
	};

	const isInCart = (id) => {
		return carrito.some((el) => {
			return el.id === id;
		});
	};

	const calcularTotal = () => {
		const nuevoTotal = carrito.reduce((acc, act) => acc + act.precio * act.cantidad, 0);
		setTotal(nuevoTotal);
	};

	const calcularCantidad = () => {
		const nuevaCantidad = carrito.reduce((acc, act) => acc + act.cantidad, 0);
		setCantidad(nuevaCantidad);
	};

	const enviarCarrito = (nombre, email, telefono, direccion, newTotal) => {
		const carritosCollection = collection(db, "carritos");

		const carritoData = {
			productos: carrito.map((el) => {
				return {
					id: el.id,
					nombre: el.nombre,
					cantidad: el.cantidad,
					precio: el.precio,
				};
			}),
			nombre: nombre,
			email: email,
			telefono: telefono,
			direccion: direccion,
			total: newTotal,
			fecha: new Date(),
		};

		addDoc(carritosCollection, carritoData)
			.then((docRef) => {
				setPedidoId(docRef.id);
				toast.success("Se ha logrado enviar el carrito correctamente. Su ID de compra es: " + pedidoId);
			})
			.catch(() => {
				toast.error("Error al enviar su carrito.");
			});

		limpiarCarrito();
	};

	useEffect(() => {
		calcularTotal();
		calcularCantidad();
	}, [carrito]);

	const contextValue = {
		carrito: carrito,
		total: total,
		borrarItem: borrarItem,
		agregarItem: agregarItem,
		limpiarCarrito: limpiarCarrito,
		cantidad: cantidad,
		enviarCarrito: enviarCarrito,
		pedidoId: pedidoId,
	};

	return <Provider value={contextValue}>{children}</Provider>;
};

export default CartProvider;
