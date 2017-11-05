import actionTypes from '../../../state-manager/action/types';
import reducer from '../../../state-manager/reducers/assessment';

const defaultState = {
		activeQuestionIndex: 0,
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
		}, 
		{
			query: 'square root of 144',
			answerChoices: [ '12', '0', '14' ],
			correct: {
				answerChoiceIndex: 0,
				scoreValue: 2
			},
			actual: {
				answerChoiceIndex: -1,
				scoreValue: 0 
			}
		}]
	};

describe( 'handles assessment reducer', () => {
	it( 'does not alter state for non-existent action', () => {
		const type = 'ANYTHING_AT_ALL',
			  state = reducer( defaultState, { type });
		expect( state ).toEqual( defaultState );
	});
	describe( 'handles QUESTION.ANSWERED action', () => {
		const type = actionTypes.QUESTION.ANSWERED;
		it( 'records correct answer', () => {
			const answer = '12',
				  state = reducer({ ...defaultState, activeQuestionIndex: 1 }, { type, answer });
			expect( state.questions[ 1 ].actual ).toEqual({ answerChoiceIndex: 0, scoreValue: 2 });
		});
		it( 'records incorrect answer', () => {
			const answer = '11',
				  { scoreValue } = defaultState.questions[ 0 ].actual,
				  state = reducer({ ...defaultState, activeQuestionIndex: 0 }, { type, answer });
			expect( state.questions[ 0 ].actual ).toEqual({ answerChoiceIndex: 1, scoreValue });
		});
		it( 'records non existent answer choice to second question to a default response', () => {
			const answer = '-2',
				  state = reducer({ ...defaultState, activeQuestionIndex: 1 }, { type, answer });
			expect( state.questions[ 1 ].actual ).toEqual( defaultState.questions[ 1 ].actual );
		});
	});
	describe( 'handles QUESTION.SELECTED action', () => {
		const type = actionTypes.QUESTION.SELECTED;
		it( 'updates active question for valid index value', () => {
			const questionIndex = 0,
				  state = reducer({ ...defaultState, activeQuestionIndex: 1 }, { type, questionIndex });
			expect( state.activeQuestionIndex ).toEqual( 1 );
		});
		it( 'does not alter state when valid index is the current active index', () => {
			const questionIndex = 1,
				  formerState = { ...defaultState, activeQuestionIndex: 1 },
				  state = reducer( formerState, { type, questionIndex });
			expect( state ).toEqual( formerState );
		});
		it( 'does not alter state for invalid index value', () => {
			const questionIndex = 2,
				  formerState = { ...defaultState, activeQuestionIndex: 1 },
				  state = reducer( formerState, { type, questionIndex });
			expect( state ).toEqual( formerState );
		});
	});
});