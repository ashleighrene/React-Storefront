import './SalesNav.css';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import search from './search_black_24dp.svg';
// import cart from '../../assets/shopping_cart_black_24dp.svg'

function SalesNav({ navOpen, setNavOpen }) {
	return (
		<Navbar className='NavMain' expand='lg'>
			<Container className='NavContainer'>
				<Navbar.Brand href='/home'>React Storefront</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/about'>About</Nav.Link>
						<Nav.Link href='/products'>Products</Nav.Link>
						<Nav.Link href='/featured'>Featured Product</Nav.Link>
						<Nav.Link href='/contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default SalesNav;
