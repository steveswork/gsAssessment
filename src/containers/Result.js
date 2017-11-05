import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import Result from '../components/result';

export default connect( state => ({ questions: state.assessment.questions }), {
						linkToStartAction: () => routeActions.push( '/' )
					})( Result );