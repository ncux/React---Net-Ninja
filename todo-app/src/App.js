import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';


class App extends Component {

  state = {
    todos: [
      { id: 1, title: 'todo 1' },
      { id: 2, title: 'todo 2' },
      { id: 3, title: 'todo 3' },
      { id: 4, title: 'todo 4' },
      { id: 5, title: 'todo 5' }
    ]
  };


  addNewTodo = title => {
    console.log(title);
    const todo = { id: this.state.todos.length + 1, title: title };
    this.setState({ todos: [...this.state.todos, todo] });
  };


  // delete todo
  deleteTodo = async id => {
    this.setState({ todos: [...this.state.todos].filter(todo => todo.id !== id) });
  };


  render() {
    return (
        <div className="todo-app container">
          <h1 className="center blue-text">Todos</h1>

          <div className="center">
            <h3>Add a new todo</h3>
            <AddTodo addNewTodo={ this.addNewTodo } />
          </div>

          <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } />


        </div>
    );
  }

}

export default App;
