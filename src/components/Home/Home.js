import './Home.css';
import React from 'react';
import hero from '../../assets/home.jpg';
import ReviewCarousel from '../ReviewCarousel/ReviewCarousel';
import { Reviews } from '../ReviewCarousel/Reviews';

//Components

function Home(props) {
	return (
		<>
			<main className='homeMain'>
				<img src={hero} alt='Bath and Soap' />
				<div className='introTextContainer'>
					<p>
						React Storefront is a one-stop shop designed to provide access to
						handmade goods of the highest quality. Feel free to contact us with
						any questions, we're here to help.
					</p>
				</div>
			</main>
			<div className='reviewCarouselContainer'>
				<ReviewCarousel slides={Reviews} />
			</div>
		</>
	);
}

export default Home;
