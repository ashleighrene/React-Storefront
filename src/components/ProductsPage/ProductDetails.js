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
			<img
				className='detailsImage'
				src={props.products.image}
				alt={props.products.title}
			/>
			<h2 className='detailsTitle'>{props.product.title}</h2>
			<h3 className='detailsDescription'>{props.products.description}</h3>
			<h4 className='detailsPrice'>{props.products.price}</h4>
			<button className='detailsButton' type='submit'>
				Add to Cart
			</button>
		</div>
	);
}

export default ProductDetails;
