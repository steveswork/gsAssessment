import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../../components/welcome';
 
describe( 'handles "Welcome Component"', () => {
	it( 'successfully rendered sans the prop', () => expect( shallow( <Welcome /> ).find( 'h3' )).toHaveLength( 1 ));
	it( 'successfully rendered with the prop', () => expect( shallow( <Welcome onEnter={ () => {}} /> ).find( 'h3' )).toHaveLength( 1 ));
});