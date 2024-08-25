import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/men" element={<ShopCategory category="men" />} />
					<Route path="/women" element={<ShopCategory category="women" />} />
					<Route path="/kids" element={<ShopCategory category="women" />} />
					<Route path="*" element={<Product />} />
					<Route path="/productId" element={<Product />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<LoginSignup />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
