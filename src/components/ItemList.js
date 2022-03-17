import React from "react";
import Item from "./Item";
import { Container, Row, Spinner } from "react-bootstrap";

const ItemList = (props) => {
	return (
		<Container>
			{props.loading && <Spinner animation="border" variant="warning" />}
			{!props.loading && !props.sinProductos && (
				<Row xs={1} md={2} xl={3} className="g-4">
					{props.productos.map((producto) => {
						return <Item producto={producto} key={producto.id} />;
					})}
				</Row>
			)}
			{props.sinProductos && <h3>No hay productos para mostrar</h3>}
		</Container>
	);
};

export default ItemList;
