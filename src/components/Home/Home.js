import './Home.css';
import React from 'react';
import hero from '../../../src/visual-stories-micheile-auKN3JcMKso-unsplash.jpg';
import ReviewCarousel from '../ReviewCarousel/ReviewCarousel';

//Components

function Home(props) {
	return (
		<div className='wrapper'>
			<span>
				<h2>Find Just What You Need . . .</h2>
			</span>
			<main>
				<div className='heroImageContainer'>
					<img src={hero} alt='Bath and Soap' />
				</div>
				<div className='introTextContainer'>
					<p>
						React Storefront is a one-stop shop designed to provide access to
						handmade goods of the highest quality. Our products page has been
						designed with you, and our artisans in mind. Each item will display
						with all the information you need to make your next purchase easy
						and fullfilling. Know that when you shop with React Storefront,
						you're supporting artists in your community do what they love.
					</p>
				</div>
			</main>
			<div className='reviewCarouselContainer'>
				<ReviewCarousel />
			</div>
		</div>
	);
}

export default Home;
