import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import reducer from '../state-manager/reducers/combined';
import App from '../App';

it( 'renders without crashing', () => {
	var wrapper = mount( 
		<Provider store={ createStore( reducer )}>
			<Router>
				<App />
			</Router>
		</Provider>
	); 
	expect( wrapper.find( '.App' )).toHaveLength( 1 );
});