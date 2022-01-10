import './ProductDetails.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';

function ProductDetails(props) {
	const [products, setProducts] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((res) => {
				setProducts(res);
			});
	});
	return (
		<div className='detailsContainer'>
			<div className='detailsContainer__img'>
				<img
					className='detailsImage'
					src={products.image}
					alt={products.title}
				/>
			</div>
			<div className='detailsContainer__text'>
				<h2 className='detailsTitle'>{products.title}</h2>
				<h3 className='detailsDescription'>{products.description}</h3>
				<h4 className='detailsPrice'>${products.price}</h4>
				<button className='detailsButton' type='submit'>
					Add to Cart
				</button>
			</div>
		</div>
	);
}

export default ProductDetails;
