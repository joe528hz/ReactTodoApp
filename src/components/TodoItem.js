import React from "react";

//data are from mapping the TodoItem component in app.js
//in events when it fires it accepts events properties so make a function that receives the event that call the handleChange() property
//use ternary operator for conditional rendering for the inline style
function TodoItem(props) {
    const completedStyle = { //inline styling
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-items">
            {/* use self closing component */}
            <input type="checkbox"
                checked={props.todo.completed}
                onChange={() => props.handleChange(props.todo.id)}
            />
            <p style={props.todo.completed ? completedStyle : null}>{props.todo.text}</p>
        </div>
    )
}


export default TodoItem