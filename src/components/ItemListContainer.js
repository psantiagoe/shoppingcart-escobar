import React from "react";
import ItemCount from "./ItemCount";

const miOnAdd = () => {};

const ItemListContainer = (props) => {
	return (
		<>
			<p className="greeting">{props.greeting}</p>;
			<ItemCount stock={8} initial={1} onAdd={miOnAdd} />
		</>
	);
};

export default ItemListContainer;
