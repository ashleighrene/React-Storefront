import './FeaturedProduct.css';
import React from 'react';
import coffee from '../../assets/coffee.jpg';

function FeaturedProduct(props) {
	return (
		<div className='FeaturedMain'>
			<img src={coffee} alt='Bag of coffee' />
			<div className='FeaturedText'>
				We Can't Wait To Share Our Favorite Items With You!
			</div>
		</div>
	);
}

export default FeaturedProduct;
