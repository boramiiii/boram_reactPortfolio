import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';

//common
import Footer from './component/common/Footer';
// import Layout from './component/common/Layout';
// import Popup from './component/common/Popup';
import Header from './component/common/Header';

//main
import Main from './component/main/Main';


//sub
import Department from './component/sub/Department';
import Gallery from './component/sub/Gallery';
import Location from './component/sub/Location';
import Notice from './component/sub/Notice';
import Product from './component/sub/Product';
import Youtube from './component/sub/Youtube';
import Join from './component/sub/Join';

import Btns from './component/common/Btns';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {

		dispatch({ type: 'YOUTUBE_START' });
		dispatch({ type: 'PRODUCT_START' });

	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' component={Header} />
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/contact' component={Location} />
			<Route path='/notice' component={Notice} />
			<Route path='/product' component={Product} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/join' component={Join} />

			<Btns />
			<Footer />
		</>
	);
}

export default App;
