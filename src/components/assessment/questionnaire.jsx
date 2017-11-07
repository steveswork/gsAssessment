import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import './questionnaire.css';

export default class extends Component {
	static get propTypes(){
		return {
			query: PropTypes.string.isRequired,
			answerChoices: PropTypes.array.isRequired,
			answer: PropTypes.any
		};
	}
	static get defaultProps(){
		return {
			answer: ''
		};
	}
	constructor( props ){
		super( props );
		this.state = {
			answer: undefined
		};
	}
	componentWillMount(){
		this.state.answer = this.props.answer;
	}
	componentWillUpdate( nextProps, nextState ){
		if( this.state.answer !== nextProps.answer ){
			this.state.answer = nextProps.answer;
		}
	}
	setAnswer( answer ){
		this.setState({ answer });
	}
	getAnswerOptionButtons( answerChoice, index ){
		return <Button key={ index } 
					   bsStyle={ this.state.answer === answerChoice ? 'primary' : 'default' } 
					   onClick={ () => this.setAnswer( answerChoice )}>
					{ answerChoice }
				</Button>;
	}
	render(){
		return <div className='questionnaire'>
			<div>{ this.props.query }</div>
			<ButtonGroup vertical block>
				{ this.props.answerChoices.map(( c, i ) => this.getAnswerOptionButtons( c, i ))}
			</ButtonGroup>
		</div>
	}
}