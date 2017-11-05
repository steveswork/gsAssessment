import ActionTypes from '../types';
		
export const recordAnswerAction = ( answer = '' ) => ({
		type: ActionTypes.QUESTION.ANSWER,
		answer
	});

export const selectQuestionAction =  ( questionIndex = 0 )  => ({
		type: ActionTypes.QUESTION.SELECT,
		questionIndex
	});