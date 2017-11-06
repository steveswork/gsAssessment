import React from 'react';
import { shallow } from 'enzyme';
import result from '../../components/result';

const Result = result.WrappedComponent,
	  props = {
	  	history: {
	  		push: (() => {})
	  	},
		questions: [{
			query: '5 times 6',
			answerChoices: [ '56', '11', '30' ],
			correct: {
				answerChoiceIndex: 2,
				scoreValue: 1
			},
			actual: {
				answerChoiceIndex: -1,
				scoreValue: 0 
			}
		}]
	};
 
describe( 'handles "Result Component"', () => {
	const wrapper = shallow( <Result { ...props } /> );
	it( 'renders our Result without crashing out', () => expect( wrapper.find( '.result' )).toHaveLength( 1 ));
});