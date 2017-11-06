import React from 'react';
import { shallow } from 'enzyme';
import welcome from '../../components/welcome';
 
describe( 'handles "Welcome Component"', () => {
	const Welcome = welcome.WrappedComponent;
	it( 'successfully rendered sans the prop', () => expect( shallow( <Welcome /> ).find( 'h3' )).toHaveLength( 1 ));
	it( 'successfully rendered with the prop', () => expect( shallow( <Welcome history={{ push: (()=>{}) }} /> ).find( 'h3' )).toHaveLength( 1 ));
});