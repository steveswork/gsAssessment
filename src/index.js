import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import reducer from './state-manager/reducers/combined';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

export default render( 
	<Provider store={ createStore( reducer, applyMiddleware( routerMiddleware( createBrowserHistory() )))}>
		<Router>
			<App />
		</Router>
	</Provider>, 
	document.getElementById( 'root' ));

registerServiceWorker();





