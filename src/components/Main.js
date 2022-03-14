import React from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = (props) => {
	return (
		<main>
			<h1>BIENVENIDO!</h1>
			<ItemListContainer greeting="Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, perferendis?" />
			<ItemDetailContainer />
		</main>
	);
};

export default Main;
