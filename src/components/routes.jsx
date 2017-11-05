import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Assessment from '../containers/Assessment';
import Result from '../containers/Result';
import NotFound from '../containers/NotFound';
import Welcome from '../containers/Welcome';

export default props => <Switch>
		<Route path='/' component={ Welcome } exact={ true } />
		<Route path='/assessment' component={ Assessment } exact={ true } />
		<Route path='/assessment/result' component={ Result } exact={ true } />
		<Route path='/*' component={ NotFound } />
	</Switch>;