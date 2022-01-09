import './ReviewCarousel.css';
import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Reviews } from './Reviews';
import { ViewCarousel } from '@mui/icons-material';

// YouTube video and source code here for help with this ViewCarouselhttps://github.com/briancodex/react-image-slider-carousel

const ReviewCarousel = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const previousSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<section className='slider'>
			<FaArrowLeft className='left-arrow' onClick={previousSlide} />
			<FaArrowRight className='right-arrow' onClick={nextSlide} />
			{Reviews.map((slide, index) => {
				return (
					<div
						className={index === current ? 'slide active' : 'slide'}
						key={index}>
						{index === current && <p className='comment'>{slide.review} </p>}
					</div>
				);
			})}
		</section>
	);
};

export default ReviewCarousel;
