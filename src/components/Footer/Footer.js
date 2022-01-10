import './Footer.css';
import React from 'react';

function Footer(props) {
	return (
		<footer className='mainFooter'>
			<span className='newsletter'>Newsletter Signup Coming Soon!</span>
			<span>
				Photos by: <br></br>
				<a href='https://unsplash.com/@aureliaduboisphotographie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
					Aurélia Dubois
				</a>
				,
				<a href='https://unsplash.com/@polarmermaid?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
					Anne Nygård
				</a>
				,
				<a href='https://unsplash.com/@kharaoke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
					Khara Woods
				</a>
				,
				<a href='https://unsplash.com/@brentg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
					Brent Gorwin
				</a>
				,
				<a href='https://unsplash.com/@battlecreekcoffeeroasters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
					Battlecreek Coffee Roasters
				</a>
				,
				<a href='https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
					Charles Deluvio
				</a>{' '}
				on{' '}
				<a href='https://unsplash.com/s/photos/soap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
					Unsplash
				</a>
			</span>
			<span className='copyright'>&copy; Copyright 2022, Ashleigh Waller</span>
		</footer>
	);
}

export default Footer;
