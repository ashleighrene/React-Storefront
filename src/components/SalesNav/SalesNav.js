import './SalesNav.css';
import { Link } from 'react-router-dom';
import React from 'react';
// import search from './search_black_24dp.svg';
import cart from './shopping_cart_black_24dp.svg';

//Components
// import Hamburger from '../Hamburger/Hamburger';

function SalesNav(props) {
	// const [hamburgerOpen, setHamburgerOpen] = useState(false);

	// const toggleHamburger = () => {
	// 	setHamburgerOpen(!hamburgerOpen);
	// };

	return (
		<nav className='SalesNavMain'>
			<Link to='/home' className='SalesNavMainHome'>
				React Storefront
			</Link>

			<Link to='/about' className='SalesMainNav__about'>
				About
			</Link>

			<Link to='/products' className='SalesMainNav__products'>
				Products
			</Link>

			<Link to='/featured' className='SalesMainNav__featured'>
				Featured Product
			</Link>

			<Link to='/contact' className='SalesMainNav__contact'>
				Contact
			</Link>

			{/* <li>
				<img className='SearchIcon' src={search} alt='Search Icon' />
			</li> */}
			<Link to='/cart'>
				<img className='CartIcon' src={cart} alt='Shopping Cart Icon' />
			</Link>
			{/* <div className='hamburger' onClick={toggleHamburger}>
				<Hamburger isOpen={hamburgerOpen} />
			</div> */}
		</nav>
	);
}

export default SalesNav;
