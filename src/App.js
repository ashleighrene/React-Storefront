import './App.css';
import ReviewCarousel from './components/ReviewCarousel/ReviewCarousel';
import SalesNav from './components/SalesNav/SalesNav';

function App() {
	return (
		<div className='wrapper'>
			<header className='mainHeader'>
				<SalesNav />
			</header>
			<main>
				<div className='heroImageContainer'>Hero Image</div>
				<div className='introTextContainer'>Intro Text</div>
			</main>
			<div className='reviewCarouselContainer'>
				<ReviewCarousel />
			</div>
			<footer className='mainFooter'>
				
					<span className='newsLetter'>Newsletter</span>
					<span className='copyright'>Copyright Information</span>
				
			</footer>
		</div>
	);
}

export default App;
