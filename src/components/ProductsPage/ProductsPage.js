import './ProductsPage.css';
import React, { useState, useEffect } from 'react';
import Products from './Products';

function ProductsPage(props) {
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
				return <Products product={product} key={product.id} />;
			})}
		</section>
	);
}

export default ProductsPage;
