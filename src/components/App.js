import Main from "./Main";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "../context/CartContext";
import NavBar from "./NavBar";

const App = () => {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Main />
				<Footer />
				<ToastContainer />
			</BrowserRouter>
		</CartProvider>
	);
};

export default App;
