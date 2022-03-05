import './About.css';
import barista from '../../assets/barista.jpg';
import pottery from '../../assets/pottery.jpg';
import paints from '../../assets/paints.jpg';
import React from 'react';

function About(props) {
	return (
		<div className='AboutMain'>
			<div className='AboutImageContainer'>
				<img className='barista' src={barista} alt='Barista making Coffee' />
				<img className='pottery' src={pottery} alt='Artist making Pottery' />
			</div>
			<div className='AboutText'>
				<p>
					Many of the products featured on this site were created by artists
					within a 50 mile range of Anywhere, USA.
				</p>
			</div>
		</div>
	);
}

export default About;
