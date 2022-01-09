import './Home.css';
import React from 'react';
import hero from '../../aurelia-dubois-6J0MUsmS4fQ-unsplash.jpg';
import ReviewCarousel from '../ReviewCarousel/ReviewCarousel';
import { Reviews } from '../ReviewCarousel/Reviews';

//Components

function Home(props) {
	return (
		<>
			<main className='homeMain'>
				<img src={hero} alt='Bath and Soap' />
				<div className='introTextContainer'>
					<h2>
						React Storefront is a one-stop shop designed to provide access to
						handmade goods of the highest quality. Feel free to Contact us with
						any Questions. We're happy to Help
					</h2>
				</div>
			</main>
			<div className='reviewCarouselContainer'>
				<ReviewCarousel slides={Reviews} />
			</div>
		</>
	);
}

export default Home;
