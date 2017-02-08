import React from 'react'

export const TodoForm = (props) => (
  <form id="todo-form" onSubmit={props.handleSubmit}>
    <input id="new-todo" type='text'
    onChange={props.handleInputChange}
    value={props.currentTodo} placeholder="New task"/>
  </form>)

  TodoForm.propTypes = {
    currentTodo: React.PropTypes.string.isRequired,
    handleInputChange: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
  }
