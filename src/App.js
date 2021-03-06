import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
// import AliceCarousel from 'react-alice-carousel';
import React from 'react';

//Components
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct';
import Contact from './components/Contact/Contact';
import SalesNav from './components/SalesNav/SalesNav';
import ProductDetails from './components/ProductsPage/ProductDetails';
import Products from './components/ProductsPage/Products';
import Cart from './components/Cart/Cart';

function App() {
	return (
		<div className='all'>
			<SalesNav />
			<main>
				<Routes>
					<Route path='/about' element={<About />}></Route>
					<Route path='/products' element={<Products />}></Route>
					<Route path='/featured' element={<FeaturedProduct />}></Route>
					<Route
						path='products/details/:id'
						element={<ProductDetails />}></Route>

					<Route path='/contact' element={<Contact />}></Route>
					<Route path='/home' element={<Home />}></Route>
					<Route path='/cart' element={<Cart />}></Route>
					<Route path='/' element={<Navigate replace to='/home' />}></Route>
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
