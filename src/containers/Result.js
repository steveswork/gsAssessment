import { connect } from 'react-redux';
import Result from '../components/result';
import { resetAnswersAction } from '../state-manager/action/creators/assessment';

export default connect( state => ({ questions: state.assessment.questions }),
						{ clearAnswers: resetAnswersAction })( Result );