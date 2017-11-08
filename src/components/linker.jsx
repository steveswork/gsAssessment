import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { isArray, isFunction } from 'lodash';

export default withRouter(
	class extends Component {
		static defaultProps = {
			button: {
				component: Button
			}
		}
		static propTypes = {
			url: PropTypes.oneOfType([ 
							PropTypes.string, 
							PropTypes.func 
						]).isRequired,
			beforeTransitionHandler: PropTypes.oneOfType([ 
											PropTypes.func,
											PropTypes.arrayOf( PropTypes.func )
										]),
			button: PropTypes.shape({
							component: PropTypes.func,
							props: PropTypes.object
						})
		}
		resolveUrl(){
			return isFunction( this.props.url ) ? this.props.url() : this.props.url;
		}
		runBeforeTransition(){
			if( typeof this.props.beforeTransitionHandler === 'undefined' ){
				return;
			}
			const { beforeTransitionHandler : handler } = this.props;
			if( isFunction( handler )){
				return handler();
			}
			isArray( handler ) && handler.forEach( h => h() );
		}
		onClick(){
			this.runBeforeTransition();
			this.props.history.push( this.resolveUrl() );
		}
		render(){
			const Linker = this.props.button.component || Button;
			return <Linker onClick={ () => this.onClick() } { ...this.props.button.props }>
					{ this.props.children }
				</Linker>
		}
	});