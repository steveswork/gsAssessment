import React from 'react';
import { mount } from 'enzyme';
import { Button } from 'react-bootstrap';
import linker from '../../components/linker';

const Linker = linker.WrappedComponent,
	  props = {
	  	url: '#',
		button: {
			component: Button
		},
		history:{
			push: (() => {})
		}
	};
 
describe( 'handles "Linker Component"', () => {
	const wrapper = mount( <Linker { ...props } /> );
	it( 'successfully rendered Linker component', () => expect( wrapper.find( 'Button' )).toHaveLength( 1 ));
});
