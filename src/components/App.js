import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";

function App() {
	return (
		<>
			<Header />
			<ItemListContainer greeting="Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, perferendis?" />
			<Main />
			<Footer />
		</>
	);
}

export default App;
