import React, { Component } from "react";
import Todos from "./todos";
import Addtodo from "./addform"
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Meditate" },
      { id: 2, content: "Read Books" },
      { id: 3, content: "Play Mario Kart" },
    ],
  };
  addtodof =(todo) =>{
    todo.id = Math.random();
    let todos =[...this.state.todos,todo];
    this.setState({
      todos
    })
  }
  deltodo =(id)=>{
    console.log(id,"deleted id");
    const todos =this.state.todos.filter(todo=>{
      return todo.id !==id
    })
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-App container">
        <h1 className="center blue-text">
          Todo's
        </h1>
        <Todos todos={this.state.todos} deletetodo={this.deltodo}/>
        <Addtodo addtodof={this.addtodof}/>
      </div>
    );
  }
}

export default App;
