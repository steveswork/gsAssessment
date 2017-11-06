import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './state-manager/reducers/combined';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

export default render( 
	<Provider store={ createStore( reducer )}>
		<Router>
			<App />
		</Router>
	</Provider>, 
	document.getElementById( 'root' ));

registerServiceWorker();