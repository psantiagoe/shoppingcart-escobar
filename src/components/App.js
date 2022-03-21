import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "../context/CartContext";

const App = () => {
	return (
		<CartProvider>
			<BrowserRouter>
				<Header />
				<Main />
				<Footer />
				<ToastContainer />
			</BrowserRouter>
		</CartProvider>
	);
};

export default App;
