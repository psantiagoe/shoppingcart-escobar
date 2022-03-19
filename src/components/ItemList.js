import React from "react";
import Item from "./Item";
import { Container, Row, Spinner } from "react-bootstrap";

const ItemList = ({ loading, sinProductos, productos }) => {
	return (
		<Container>
			{loading && <Spinner animation="border" variant="warning" />}
			{!loading && !sinProductos && (
				<Row xs={1} md={2} xl={3} className="g-4">
					{productos.map((producto) => {
						return <Item producto={producto} key={producto.id} />;
					})}
				</Row>
			)}
			{sinProductos && <h3>No hay productos para mostrar</h3>}
		</Container>
	);
};

export default ItemList;
