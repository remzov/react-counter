import React, { Component } from 'react';

class Counter extends Component {
	render() {
		const {value, onIncrement, onDecrement} = this.props;
		return (
			<div className="row">
				<button type="button" onClick={onDecrement}>-</button>
                <div className="result">{value}</div>
                <button type="button" onClick={onIncrement}>+</button>
			</div>
		);
	}
}

export default Counter;
