import React from "react";
import ItemListContainer from "./ItemListContainer";

const Main = (props) => {
	return (
		<main>
			<h1>BIENVENIDO!</h1>
			<ItemListContainer greeting="Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, perferendis?" />
		</main>
	);
};

export default Main;
