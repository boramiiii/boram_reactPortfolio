import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ScrollTop from './asset/ScrollTop';
ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<ScrollTop />
			<App />
		</Provider>
	</HashRouter>,
	// <BrowserRouter basename={process.env.PUBLIC_URL}>
	// 	<App />
	// </BrowserRouter>,
	document.getElementById('root')
);
