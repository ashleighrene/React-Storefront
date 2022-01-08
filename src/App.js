import './App.css';
import { Routes, Route } from 'react-router-dom';

//Components
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ProductsPage from './components/ProductsPage/ProductsPage';
import SalesNav from './components/SalesNav/SalesNav';
import ProductDetails from './components/ProductsPage/ProductDetails';
import Products from './components/ProductsPage/Products';

function App() {
	return (
		<div className='all'>
			<SalesNav />
			<main>
				<Routes>
					<Route path='/home' element={<Home />}></Route>
					<Route path='/products' element={<ProductsPage />}></Route>
					<Route path='details/:id' element={<ProductDetails />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
