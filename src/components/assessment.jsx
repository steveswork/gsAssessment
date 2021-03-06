import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import Linker from './linker';
import Questionnaire from './assessment/questionnaire';
import './assessment.css';


export default class extends Component {
		static propTypes = {
			totalQuestions: PropTypes.number.isRequired,
			questionIndex: PropTypes.number.isRequired,
			question: PropTypes.shape({
					query: PropTypes.string,
					answerChoices: PropTypes.array,
					answer: PropTypes.any
				}).isRequired,
			onAnswer: PropTypes.func,
			onUpdateQuestion: PropTypes.func,
			onSubmit:  PropTypes.func
		}
		onUpdateQuestion( nextQuestionIndex ){
			this.props.onAnswer( this.questionnaire.state.answer );
			this.props.onUpdateQuestion( nextQuestionIndex );
		}
		onSubmit(){
			this.props.onAnswer( this.questionnaire.state.answer );
			this.props.onSubmit && this.props.onSubmit() 
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
					<div>Step { this.props.questionIndex + 1 } of { this.props.totalQuestions }</div>
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
						? <div className='dir back'><Button onClick={ () => onUpdateQuestion( questionIndex - 1 )}>Previous</Button></div> 
						: <div className='dir null'><span /></div>;

const NextButton = ({ onUpdateQuestion, onSubmit, questionIndex, totalQuestions }) => 
					questionIndex < totalQuestions - 1
						? <div className='dir next'><Button onClick={ () => onUpdateQuestion( questionIndex + 1 )}>Next</Button></div>
						: <div className='dir submit'>
							<Linker url = '/assessment/result' beforeTransitionHandler = { onSubmit }>Finish</Linker>
						  </div>;

const JumpButtons = ({ onUpdateQuestion, questionIndex, totalQuestions }) =>
			<ButtonGroup>
				<ButtonToolbar>
					{ range( totalQuestions ).map( getJumpButtonProvider( questionIndex, onUpdateQuestion ))}
				</ButtonToolbar>
			</ButtonGroup>;

const getJumpButtonProvider = ( activeButtonIndex, onClick ) => buttonIndex => buttonIndex !== activeButtonIndex
											? <Button key={ buttonIndex } onClick={ () => onClick( buttonIndex )}>{ buttonIndex + 1 }</Button>
											: <Button key={ buttonIndex } disabled={ true }>{ buttonIndex + 1 }</Button>;