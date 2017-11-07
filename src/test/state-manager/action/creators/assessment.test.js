import actionTypes from '../../../../state-manager/action/types';
import * as creators from '../../../../state-manager/action/creators/assessment';

describe( 'handles assessment action creator', () => {
	it( 'initiates action to record answer', () => expect( creators.recordAnswerAction( 'answered' )).toEqual({
						type: actionTypes.QUESTION.ANSWER,
						answer: 'answered'
					}));
	it( 'initiates action to select another question', () => expect( creators.selectQuestionAction( 1 )).toEqual({
						type: actionTypes.QUESTION.SELECT,
						questionIndex: 1
					}));
	it( 'initiates action to reset all user answers', () => expect( creators.resetAnswersAction() ).toEqual({
						type: actionTypes.ANSWERS.RESET
					}));
});