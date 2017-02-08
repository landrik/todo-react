import React from 'react';
import {TodoItem} from './TodoItem'

export const TodoList = (props) =>{
  return(
    <section id="main">
    <div className="Todo-List">
      <ul id="todo-list">
        {props.todos.map(todo => <TodoItem handleToggle={props.handleToggle} key={todo.id} {...todo}/>)}
      </ul>
    </div>
    </section>
  )
}


TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
}
