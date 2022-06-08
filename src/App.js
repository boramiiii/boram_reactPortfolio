import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';

//common
import Footer from './component/common/Footer';
// import Layout from './component/common/Layout';
// import Popup from './component/common/Popup';
import Header from './component/common/Header';

//main
import MainImg from './component/main/MainImg';
import Plist from './component/main/Plist';
import Products from './component/main/Products';
import Text from './component/main/Text';
import Video from './component/main/Video';

//sub
import Department from './component/sub/Department';
import Gallery from './component/sub/Gallery';
import Location from './component/sub/Location';
import Notice from './component/sub/Notice';
import Product from './component/sub/Product';
import Youtube from './component/sub/Youtube';
import Join from './component/sub/Join';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					{/* 메인용 header */}
					<Header type={'main'} />
					<MainImg />
					<Plist />
					<Products />
					<Text />
					<Video />
				</Route>

				{/* 서브용 header */}
				<Route
					path='/'
					render={() => <Header type={'sub'} />}
				/>
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/location' component={Location} />
			<Route path='/notice' component={Notice} />
			<Route path='/product' component={Product} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;
