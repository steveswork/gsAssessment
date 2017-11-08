import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Button } from 'react-bootstrap';
import Linker from './linker';
import './result.css';

export default class extends Component{
		static propTypes = {
			questions: PropTypes.arrayOf(
					PropTypes.shape({
						query: PropTypes.string,
						answerChoices: PropTypes.array,
						correct: PropTypes.shape({
							answerChoiceIndex: PropTypes.nunber,
							scoreValue: PropTypes.number
						}),
						actual: PropTypes.shape({
							answerChoiceIndex: PropTypes.nunber,
							scoreValue: PropTypes.number
						})
					})).isRequired,
			clearAnswers: PropTypes.func.isRequired
		}
		static defaultProps = {
			clearAnswers: (()=>{})
		}
		getRow( question, index ){
			return <div key={ index }>
					<div>{ question.query }</div>
					<div>{ get( question, `answerChoices[${ question.actual.answerChoiceIndex }]`, '' )}</div>
					<div>{ question.answerChoices[ question.correct.answerChoiceIndex ]}</div>
				</div>
		}
		getTotal( scoreValuePath ){
			return this.props.questions.reduce(( total, q ) => total + get( q, scoreValuePath, 0 ), 0 );  
		}
		render(){
			return <div className='result'>
				<h3> Here is how you fared in your assessment</h3>
				<div>
					<div>
						<div>Questions</div>
						<div>Your Answer</div>
						<div>Expected Answer</div>
					</div>
					{ this.props.questions.map(( q, i ) => this.getRow( q, i ))}
				</div>
				<div>
					You scored: { ' ' }
					<span>{ this.getTotal( 'actual.scoreValue' )}</span> 
					{ ' ' } out of { ' ' }
					<span>{ this.getTotal( 'correct.scoreValue' )}</span>
				</div>
				<div>
					<Linker url='/' 
							beforeTransitionHandler={ this.props.clearAnswers }
							button = {{ component: Button,
										props: {
											bsStyle: 'link'
										}
									}}>
						Home
					</Linker>
				</div>
			</div>
		}
	};