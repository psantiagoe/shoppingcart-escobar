import { createContext, useEffect, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CartProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);
	const [total, setTotal] = useState(0);

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

	useEffect(() => {
		const nuevoTotal = carrito.reduce((acc, act) => acc + act.precio * act.cantidad, 0);
		setTotal(nuevoTotal);
	}, [carrito]);

	const contextValue = {
		carrito: carrito,
		total: total,
		borrarItem: borrarItem,
		agregarItem: agregarItem,
		limpiarCarrito: limpiarCarrito,
	};

	return <Provider value={contextValue}>{children}</Provider>;
};

export default CartProvider;
