import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import Questionnaire from './assessment/questionnaire';


export default class extends Component {
	static get propTypes(){
		return {
			totalQuestions: PropTypes.number.isRequired,
			questionIndex: PropTypes.number.isRequired,
			question: PropTypes.shape({
					query: PropTypes.string,
					answerChoices: PropTypes.array
				}).isRequired,
			onAnswer: PropTypes.func,
			onUpdateQuestion: PropTypes.func,
			onSubmit:  PropTypes.func
		};
	}
	onUpdateQuestion( nextQuestionIndex ){
		this.props.onAnswer( this.questionnaire.state.answer );
		this.props.onUpdateQuestion( nextQuestionIndex );
	}
	onSubmit(){
		this.props.onAnswer( this.queryForm.state.answer );
		this.props.onSubmit();
	}
	render(){
		const { questionIndex, totalQuestions } = this.props,
			  buttonProps = { 
			  		onUpdateQuestion: this.onUpdateQuestion.bind( this ), 
			  		onSubmit: this.onSubmit.bind( this ), 
			  		questionIndex, 
			  		totalQuestions 
			  	};
		return <div className='assessment'>
				<h3>Assessment { this.props.questionIndex + 1 } of { this.props.totalQuestions }</h3>
				<Questionnaire ref={ q => this.questionnaire = q }{ ...this.props.question } />
				<div className='actions'>
					<BackButton { ...buttonProps } />
					<JumpButtons { ...buttonProps } />
					<NextButton { ...buttonProps } />
				</div>
			</div>
	} 
}

const BackButton = ({ onUpdateQuestion, questionIndex }) => 
					questionIndex > 0
						? <div className='back'><Button onClick={ () => onUpdateQuestion( questionIndex - 1 )}>Previous</Button></div> 
						: <div className='null'><span /></div>;

const NextButton = ({ onUpdateQuestion, onSubmit, questionIndex, totalQuestions }) => 
					questionIndex < totalQuestions - 1 
						? <div className='next'><Button onClick={ () => onUpdateQuestion( questionIndex + 1 )}>Next</Button></div>
						: <div className='submit'><Button onClick={ onSubmit }>Finish</Button></div>;

const JumpButtons = ({ onUpdateQuestion, questionIndex, totalQuestions }) =>
			<div>
				<ButtonGroup>
					<ButtonToolbar>
						{ range( totalQuestions - 1 ).map( getJumpButtonProvider( questionIndex, onUpdateQuestion ))}
					</ButtonToolbar>
				</ButtonGroup>
			</div>;

const getJumpButtonProvider = ( activeButtonIndex, onClick ) => buttonIndex => buttonIndex !== activeButtonIndex
											? <Button key={ buttonIndex } onClick={ () => onClick( buttonIndex )}>{ buttonIndex + 1 }</Button>
											: <Button key={ buttonIndex } disabled={ true }>{ buttonIndex + 1 }</Button>;