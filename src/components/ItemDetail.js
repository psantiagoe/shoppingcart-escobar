import { React } from "react";
import { Spinner, Image } from "react-bootstrap";

const ItemDetail = (props) => {
	return (
		<>
			{props.loading && <Spinner animation="border" variant="warning" />}
			{!props.loading && (
				<>
					<Image src={props.producto.img} fluid={true} />
					<h1>
						{props.producto.nombre} | $ {props.producto.precio}
					</h1>
					<p>{props.producto.descripcion}</p>
				</>
			)}
		</>
	);
};

export default ItemDetail;
