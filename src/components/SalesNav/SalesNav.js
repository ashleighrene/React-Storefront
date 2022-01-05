import './SalesNav.css';
import React from 'react';

function SalesNav(props) {
	return (
		<ul className='SalesNavMain'>
			<h1>React Storefront</h1>
			<li>About</li>
			<li>Products</li>
			<li>Featured Product</li>
			<li>Contact</li>
			<li>Search</li>
			<li>Shopping Cart</li>
		</ul>
	);
}

export default SalesNav;
