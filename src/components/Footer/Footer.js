import './Footer.css';
import React from 'react';

function Footer(props) {
	return (
		<footer className='mainFooter'>
			<span className='newsletter'>Newsletter Signup Coming Soon!</span>
			<span>
				Photo by{' '}
				<a href='https://unsplash.com/@aureliaduboisphotographie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
					Aurélia Dubois
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
