import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

const ENTER_KEY = 13;

@observer
export default class TodoEntry extends React.Component {

	// handleChange(ev) {
	// 	console.log(ev.target.value)
	// 	console.log(ev.keyCode)
		
	// 	ev.preventDefault()

	// 	const val = ev.target.value.trim()

	// 	if (val) {
	// 		this.props.todoStore.addTodo(val)
	// 		this.textInput.value = ''
	// 	}

	// }

	// handleSubmit(event) {
	// 	console.log(event.target.value)
	// 	event.preventDefault();
	// }

	render() {
		return (<input
			// ref="newField"
			ref={(i) => {this.textInput = i}}
			className="new-todo"
			placeholder="What needs to be done?"
			onKeyDown={this.handleNewTodoKeyDown}
			onChange={this.handleChange}
			autoFocus={true}
		/>)
	}

	handleNewTodoKeyDown = (ev) => {

		console.log(this.textInput.value)
		if (ev.keyCode !== ENTER_KEY) {
			return
		}

		ev.preventDefault()

		var val = this.textInput.value.trim()

		if (val) {
			this.props.todoStore.addTodo(val)
			this.textInput.value = ''
		}
	}
}

TodoEntry.propTypes = {
	todoStore: PropTypes.object.isRequired
};
