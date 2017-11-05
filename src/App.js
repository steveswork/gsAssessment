import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './components/routes';

export default props => <div className='App'>
	        <header className="App-header">
	          <img src={ logo } className="App-logo" alt="logo" />
	          <h1 className="App-title">GS - { 'Math' } Assessment powered by React</h1>
	        </header>
	        <article>
	          <Routes />
	        </article>
		</div>;