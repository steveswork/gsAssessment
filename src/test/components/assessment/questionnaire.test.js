import React from 'react';
import { shallow } from 'enzyme';
import Questionnaire from '../../../components/assessment/questionnaire';

const props = {
		query: 'What\'s what',
		answerChoices: [
			'Whatever do mean?',
			'Nothing much',
			'Are we speaking in tautology now?'
		]
	};
 
describe( 'handles "Questionnaire Component"', () => {
	const wrapper = shallow( <Questionnaire { ...props } /> );
	it( 'successfully rendered Questionnaire component', () => expect( wrapper.find( '.questionnaire' )).toHaveLength( 1 ));
	it( 'successfully rendered our choice buttons', () => expect( wrapper.find( 'Button' )).toHaveLength( props.answerChoices.length ));
});