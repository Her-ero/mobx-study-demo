// import 'todomvc-common';
import TodoStore from './stores/TodoStore'
import ViewStore from './stores/ViewStore'
import TodoApp from './page/todoApp'
import React from 'react'
import ReactDOM from 'react-dom'

const initialState = window.initialState && JSON.parse(window.initialState) || {}

var todoStore = TodoStore.fromJS(initialState.todos || [])
var viewStore = new ViewStore()

todoStore.subscribeServerToStore()

ReactDOM.render(
	<TodoApp todoStore={todoStore} viewStore={viewStore}/>,
	document.getElementById('todoapp')
)

if (module.hot) {
  module.hot.accept('./page/todoApp', () => {
    var NewTodoApp = require('./page/todoApp').default;
    ReactDOM.render(
      <NewTodoApp todoStore={todoStore} viewStore={viewStore}/>,
      document.getElementById('todoapp')
    )
  })
}

