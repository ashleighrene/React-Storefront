import './Hamburger.css';
import React from 'react';

function Hamburger({ isOpen }) {
	return (
		<div className='hamburger'>
			<div className='burger burger 1'></div>
			<div className='burger burger 2'></div>
			<div className='burger burger 3'></div>
		</div>
	);
}

export default Hamburger;
