import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../../components/welcome';
 
describe( 'handles "Welcome Component"', () => {
	it( 'successfully rendered our welcome component', () => expect( shallow( <Welcome /> ).find( 'h3' )).toHaveLength( 1 ));
});