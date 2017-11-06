import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Assessment from '../containers/Assessment';
import Result from '../containers/Result';
import NotFound from '../components/not-found';
import Welcome from '../components/welcome';

export default props => <Switch>
		<Route path='/' component={ Welcome } exact={ true } />
		<Route path='/assessment' component={ Assessment } exact={ true } />
		<Route path='/assessment/result' component={ Result } exact={ true } />
		<Route path='/*' component={ NotFound } />
	</Switch>;