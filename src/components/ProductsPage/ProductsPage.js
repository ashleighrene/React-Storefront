import './ProductsPage.css';
import React, { useState, useEffect } from 'react';

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
			{product.map((products) => (
				<div key={products.id}>
					<img src={products.img} alt={products.title} />
				</div>
			))}
		</section>
	);
}

export default ProductsPage;
