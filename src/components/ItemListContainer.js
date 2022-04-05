import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemList from "./ItemList";
import { db } from "../database/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
	const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);
	const [sinProductos, setSinProductos] = useState(false);
	const { idCategoria } = useParams();

	useEffect(() => {
		setLoading(true);
		setSinProductos(false);

		const comidaCollection = collection(db, "comidas");
		const qCategoria = query(comidaCollection, where("categoria", "==", `${idCategoria}`));

		const auxProductos = [];

		if (idCategoria === undefined) {
			const documentos = getDocs(comidaCollection);

			documentos
				.then((respuesta) => {
					respuesta.forEach((documento) => {
						const comida = {
							id: documento.id,
							...documento.data(),
						};

						auxProductos.push(comida);
					});

					setSinProductos(auxProductos.length === 0);
					setProductos(auxProductos);
				})
				.catch((e) => {
					toast.error("Error al cargar los productos.");
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			const docCategory = getDocs(qCategoria);

			docCategory
				.then((respuesta) => {
					respuesta.forEach((documento) => {
						const comida = {
							id: documento.id,
							...documento.data(),
						};

						auxProductos.push(comida);
					});

					setSinProductos(auxProductos.length === 0);
					setProductos(auxProductos);
				})
				.catch((e) => {
					toast.error("Error al cargar los productos.");
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [idCategoria]);

	return <ItemList productos={productos} loading={loading} sinProductos={sinProductos} />;
};

export default ItemListContainer;
