import './Products.css';
import ProductDetails from './ProductDetails';
import React from 'react';

function Products(props) {
	return (
		<div className='productCard'>
			
			<img
				className='productCard__img'
				src={props.product.image}
				alt={props.product.title}
			/>
		</div>
	);
}

export default Products;
