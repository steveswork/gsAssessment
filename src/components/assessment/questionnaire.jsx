import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import './questionnaire.css';

export default class Questionnaire extends Component {
	static propTypes = {
		query: PropTypes.string.isRequired,
		answerChoices: PropTypes.array.isRequired,
		answer: PropTypes.any
	}
	static defaultProps = {
			answer: ''
	}
	constructor( props ){
		super( props );
		this.state = {
			answer: this.props.answer
		};
	}
	componentWillReceiveProps( nextProps ){
		this.state.answer !== nextProps.answer && this.setAnswer( nextProps.answer );
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