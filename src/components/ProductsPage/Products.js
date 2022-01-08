import './Products.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import ProductDetails from './ProductDetails';

function Products(props) {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((res) => {
				setProduct(res);
			})
			.catch(console.error);
	}, []);

	if (!product.length) {
		return null;
	}

	return (
		<section className='productsGallery'>
			{product.map((product) => {
				return (
					<Link to={`details/${product.id}`} product={product} key={product.id}>
						<div className='productCard'>
							<div className='productCard__img'>
								<img src={product.image} alt={product.title} />
							</div>
						</div>
					</Link>
				);
			})}
		</section>
	);
}

export default Products;
