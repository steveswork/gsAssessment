import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import Welcome from '../components/welcome';

export default connect(
	undefined, {
		onEnter: () => routeActions.push( '/assessment' )
})( Welcome );