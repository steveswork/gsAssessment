import actionTypes from '../action/types';

export const defaultState = {
	activeQuestionIndex: 0,
	questions: [ ...require( '../../data/questions' ).default ]
}

const recordAnswer = ( state, answer ) => {
							let { questions } = state,
							    { answerChoices, correct } = questions[ state.activeQuestionIndex ];
							const answerChoiceIndex = answerChoices.indexOf( answer ),
								  scoreValue = correct.answerChoiceIndex !== answerChoiceIndex 
								  					? defaultState.questions[ state.activeQuestionIndex ].actual.scoreValue
								  					: correct.scoreValue
							questions[ state.activeQuestionIndex ].actual = { answerChoiceIndex, scoreValue };
							return { ...state, questions }
						},
	  selectQuestion = ( state, index ) => {
	  						if( index !== state.activeQuestionIndex && index > -1 && index < state.questions.length ){
	  							return { ...state, activeQuestionIndex: index };
	  						}
	  						return state;
	  					}

export default function( state = defaultState, action ){
	switch( action.type ){
		case actionTypes.QUESTION.ANSWER: return recordAnswer( state, action.answer );
		case actionTypes.QUESTION.SELECT: return selectQuestion( state, action.questionIndex );
		default: return state;
	}
}