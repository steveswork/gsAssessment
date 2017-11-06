import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default withRouter(({ history }) => <div className='not-found'>
									<h3>Page not found</h3>
									<div>
										<p>The page you requested was not found.</p>
										<Button bsStyle='link' onClick={ () => history.push( '/' )} block>Click here to go back home</Button>
									</div>
								</div>  );