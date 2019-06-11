import React, { Component } from 'react'
import TodoForm from './TodoForm';

export class App extends Component {

  state = {
    todos: []
  }

  addTodo = (todo) => {
    
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }
  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
      </div>
    )
  }
}

export default App
