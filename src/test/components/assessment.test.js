import React from 'react';
import { mount } from 'enzyme';
import Assessment from '../../components/assessment';
import { MemoryRouter } from 'react-router-dom';

const props = {
		totalQuestions: 8,
		questionIndex: 0,
		question:{
				query: 'What\'s what',
				answerChoices: [
					'Whatever do mean?',
					'Nothing much',
					'Are we speaking in tautology now?'
				]
			}
	};
 
describe( 'handles "Assessment Component"', () => {
	const wrapper = mount( <Assessment { ...props } /> );
	it( 'successfully rendered Assessment component', () => expect( wrapper.find( '.assessment' )).toHaveLength( 1 ));

	describe( 'handles first question rendering', () => {
		const _props = { 
				  	...props, 
				  	questionIndex: 0
				  },
			  wrapper = mount( <Assessment { ..._props } /> );
		it( 'does not render the previous button', () => {
			expect( wrapper.find( ".back" )).toHaveLength( 0 )
		});
	});

	describe( 'handles last question rendering', () => {
		const _props = { 
				  	...props, 
				  	questionIndex: 7 
				  },
			  wrapper = mount( <MemoryRouter>
			  					<Assessment { ..._props } />
			  				</MemoryRouter> );
		it( 'does not render the next button', () => {
			expect( wrapper.find( ".next" )).toHaveLength( 0 )
		});
		it( 'renders the submit button', () => {
			expect( wrapper.find( ".submit" )).toHaveLength( 1 )
		});
	});
	
	describe( 'handles any middle question rendering', () => {
		const _props = { 
				  	...props, 
				  	questionIndex: 3
				  },
			  wrapper = mount( <Assessment { ..._props } /> );
		it( 'renders the back button', () => {
			expect( wrapper.find( ".back" )).toHaveLength( 1 )
		});
		it( 'renders the next button', () => {
			expect( wrapper.find( ".next" )).toHaveLength( 1 )
		});
	});
});