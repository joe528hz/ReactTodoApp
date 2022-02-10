import React from "react";
import TodoItem from "./components/TodoItem";
import todoData from "./TodoData"

//make a class based component
//add a constructor to make it a stateful class
//mapping properties to the TodoItem component
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  //map thru the previous state and store the returned value to updatedTodos
  //then return the updatedTodos
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) { //comparison if the id is equal to the parameter id
          todo.completed = !todo.completed; //flip the value
        }
        return todo;
      })
      return {
        todos: updatedTodos //returning the updated state
      }
    })
    // console.log("change", id)
  }
  render() {
    const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} todo={item}
      handleChange={this.handleChange} />)

    return (
      <div className="todo-list">
        {todoComponents}
      </div>
    )
  }
}

export default App