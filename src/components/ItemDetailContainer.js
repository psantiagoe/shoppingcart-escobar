import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { toast } from "react-toastify";
import { db } from "../database/firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [loading, setLoading] = useState(true);
	const [producto, setProducto] = useState({});
	const { idProducto } = useParams();

	useEffect(() => {
		const docRef = doc(db, "comidas", idProducto);
		const documento = getDoc(docRef);

		documento
			.then((doc) => {
				const comida = {
					id: doc.id,
					...doc.data(),
				};
				setProducto(comida);
			})
			.catch((e) => {
				toast.error("Error al cargar el producto.");
			})
			.finally(() => {
				setLoading(false);
			});
	}, [idProducto]);

	return (
		<>
			<ItemDetail producto={producto} loading={loading} />
		</>
	);
};

export default ItemDetailContainer;
