export default require( 'redux' ).combineReducers({
		assessment: require( './assessment' ).default,
		router: require( 'react-router-redux' ).routerReducer
	});