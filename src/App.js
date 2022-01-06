import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

//Components
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ProductsPage from './components/ProductsPage/ProductsPage';
import SalesNav from './components/SalesNav/SalesNav';

function App() {
	return (
		<div className='all'>
			<SalesNav />
			<main>
				{/* <Home /> */}
				<Routes>
					<Route path='/home' element={<Home />}></Route>
					<Route path='/products' element={<ProductsPage />}></Route>
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
