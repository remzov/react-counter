import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import Counter from  '../../components/counter/counter';

class App extends Component {
	render() {
		return (
			<Counter
				value={this.props.value}
				onIncrement={this.props.onIncrement}
				onDecrement={this.props.onDecrement}
			/>
		);
	}
}

export default connect(
	state => ({
		value: state.value
	}),
	dispatch => ({
		onIncrement: () => {
			dispatch({type: 'INCREMENT'})
		},
		onDecrement: () => {
			dispatch({type: 'DECREMENT'})
		}
	})	
)(App);

 