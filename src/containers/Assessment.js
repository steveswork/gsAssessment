import { connect } from 'react-redux';
import pick from 'lodash/pick';
import { recordAnswerAction, selectQuestionAction } from '../state-manager/action/creators/assessment';
import Assessment from '../components/assessment';

export default connect( 
		state => {
			const { activeQuestionIndex, questions } = state.assessment,
				  activeQuestion = questions[ activeQuestionIndex ];
			return {
				totalQuestions: questions.length,
				questionIndex: activeQuestionIndex,
				question: {
					...pick( activeQuestion, 'answerChoices', 'query' ),
					answer: activeQuestion.answerChoices[ activeQuestion.actual.answerChoiceIndex ]
				}
			};
		}, { 
			onAnswer: recordAnswerAction,
			onUpdateQuestion: selectQuestionAction
		})( Assessment );