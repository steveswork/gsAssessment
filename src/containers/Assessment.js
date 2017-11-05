import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import pick from 'lodash/pick';
import { recordAnswerAction, selectQuestionAction } from '../state-manager/action/creators/assessment';
import Assessment from '../components/assessment';

export default connect( 
		state => ({
			totalQuestions: state.questions.length,
			questionIndex: state.activeQuestionIndex,
			question: {
				...pick( state.questions[ state.activeQuestionIndex ], 'answerChoices', 'query' )
			},
		}), { 
			onAnswer: recordAnswerAction,
			onUpdateQuestion: selectQuestionAction,
			onSubmit: () => routeActions.push( '/assessment/result' )
		})( Assessment );