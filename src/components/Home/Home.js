import './Home.css';
import React from 'react';
import hero from '../../../src/visual-stories-micheile-auKN3JcMKso-unsplash.jpg';
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
						handmade goods of the highest quality.
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
