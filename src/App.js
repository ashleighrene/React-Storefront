import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';

//Components
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import SalesNav from './components/SalesNav/SalesNav';
import ProductDetails from './components/ProductsPage/ProductDetails';
import Products from './components/ProductsPage/Products';

function App() {
	return (
		<div className='all'>
			<SalesNav />
			<main>
				<Routes>
					<Route path='/products' element={<Products />}></Route>

					<Route
						path='products/details/:id'
						element={<ProductDetails />}></Route>

					<Route path='/home' element={<Home />}></Route>
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
