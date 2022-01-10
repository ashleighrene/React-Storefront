import './About.css';
import about1 from '../../brent-gorwin-vhQUnmnOLys-unsplash.jpg';
import about2 from '../../anne-nygard-G4IB-r6nsJI-unsplash.jpg';
import about3 from '../../khara-woods-KR84RpMCb0w-unsplash.jpg';
import React from 'react';

function About(props) {
	return (
		<div className='AboutMain'>
			<div className='AboutImageContainer'>
				<img className='AboutImage1' src={about1} alt='Barista making Coffee' />
				<img className='AboutImage2' src={about2} alt='Artist making Pottery' />
				<img className='AboutImage3' src={about3} alt='Assorted Paintbrushes' />
			</div>
			<div className='AboutText'>
				<p>
					Many of the products featured on this site were created by artists
					within a 50 mile range of Anywhere, USA. Our buyers work with members
					of the community to find products to feature on this site that reflect
					this wonderful place we call home.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
					pariatur vel voluptate voluptas, ipsam cum reiciendis? Cumque commodi
					reprehenderit dignissimos architecto consequuntur natus omnis esse
					doloribus culpa vero, facere non.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
					beatae commodi sapiente, nobis rerum accusamus! Sint molestias
					expedita mollitia voluptas, tenetur aliquid soluta natus voluptatum
					pariatur ipsa adipisci tempora asperiores?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iure
					facere numquam debitis iusto labore temporibus, voluptate ad
					cupiditate ex sit nulla mollitia necessitatibus error repellat
					voluptas, ipsam laboriosam fugit!
				</p>
			</div>
		</div>
	);
}

export default About;
