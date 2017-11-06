import { connect } from 'react-redux';
import Result from '../components/result';

export default connect( state => ({ questions: state.assessment.questions }))( Result );