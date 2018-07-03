import React from 'react'
// import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'

const ENTER_KEY = 13

@observer
export default class TodoEntry extends React.Component {

	handleNewTodoKeyDown = (ev) => {

		// console.log(this.textInput.value)
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

	render() {
		return (<input
			ref={(i) => {this.textInput = i}}
			className="new-todo"
			placeholder="What needs to be done?"
			onKeyDown={this.handleNewTodoKeyDown}
			onChange={this.handleChange}
			autoFocus={true}
		/>)
	}
}

TodoEntry.propTypes = {
	todoStore: PropTypes.object.isRequired
};
