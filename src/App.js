import React, { Component } from 'react';
import './App.css';
import { TodoForm, TodoList } from './components/todo';
import { addTodo, generateId, findById, toggleTodo, updateTodo } from './lib/todoHelpers'


class App extends Component {
  constructor(){
    super()
    this.state={
      todos:[
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an awesome App', isComplete: false},
        {id: 3, name: 'Ship it', isComplete: false}
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleInputChange(evt){
    this.setState({
      currentTodo: evt.target.value
    })
  }
  handleToggle(id){
    const todo = findById(id, this.state.todos)
    const toggled = toggleTodo(todo)
    const updatedTodos = updateTodo(this.state.todos, toggled)
    this.setState({todos: updatedTodos})

  }
  handleSubmit(evt){
    evt.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, name:this.state.currentTodo, isComplete:false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos:updatedTodos,
      currentTodo:'',
      errorMessage: ''
    })
  }
  handleEmptySubmit(evt){
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a task name'
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <section id="todoapp" className="App">
        <header id="header">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}
          />
        </header>
        <div className="Todo-App">
          <TodoList handleToggle={this.handleToggle} todos={this.state.todos}/>
        </div>
      </section>
    );
  }
}

export default App;
