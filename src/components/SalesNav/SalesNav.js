import './SalesNav.css';
import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
// import search from './search_black_24dp.svg';
// import cart from './shopping_cart_black_24dp.svg';

//Components
import ProductsPage from '../ProductsPage/ProductsPage';

function SalesNav(props) {
	return (
		<nav className='SalesNavMain'>
			<Link to='/home' className='SalesNavMainHome'>
				React Storefront
			</Link>

			<Link to='' className='SalesMainNav__about'>
				About
			</Link>

			<Link to='/products' className='SalesMainNav__products'>
				Products
			</Link>

			<Link to='' className='SalesMainNav__featured'>
				Featured Product
			</Link>

			<Link to='' className='SalesMainNav__contact'>
				Contact
			</Link>

			{/* <li>
				<img className='SearchIcon' src={search} alt='Search Icon' />
			</li>
			<li>
				<img className='CartIcon' src={cart} alt='Shopping Cart Icon' />
			</li> */}
		</nav>
	);
}

export default SalesNav;
