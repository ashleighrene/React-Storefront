import './ProductDetails.css';
import React, { useState, useEffect } from 'react';
import React from 'react';

function ProductDetails(props) {
	return (
		<div className='detailsContainer'>
			<img src={props.product.image} alt={props.product.title} />
			<h2 className='detailsTitle'>{props.product.title}</h2>
			<h3 className='detailsDescription'>{props.product.description}</h3>
			<h4 className='detailsPrice'>{props.product.price}</h4>
			<button className='detailsButton' type='submit'>
				Add to Cart
			</button>
		</div>
	);
}

export default ProductDetails;
