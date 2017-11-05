import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { Button } from 'react-bootstrap';

export default connect( 
		undefined, { 
			linkAction: () => routeActions.push( '/' )
		})(({ linkAction }) => 
			<div className='not-found'>
				<h3>Page not found</h3>
				<div>
					<p>The page you requested was not found.</p>
					<Button bsStyle='link' onClick={ linkAction } block>Click here to go back home</Button>
				</div>
			</div>
	);