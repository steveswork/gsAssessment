import React from 'react';
import { Button } from 'react-bootstrap';
import Linker from './linker';
import './not-found.css';

export default props => <div className='not-found'>
							<h3>Page not found</h3>
							<div>
								<p>The page you requested was not found.</p>
								<Linker url='/' 
											button={{
												component: Button,
												props: { 
													block: true 
												}
											}}>
									Click here to go back home
								</Linker>
							</div>
						</div>;