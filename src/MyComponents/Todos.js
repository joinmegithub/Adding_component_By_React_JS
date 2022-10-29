import React from 'react'
import { Todoitem } from "./Todoitem";

export const Todos = (props) => {
  let meStyle = {
    minHeight: "70vh",
  }
  return (
    <div className="container my-3" style={meStyle}>
      <h4 >Add Details</h4>
      {props.todos.length === 0 ? "Nothing to Display" :
        props.todos.map((todo) => {
          return (
            <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          )
        })
      }
    </div>
  )
}

export default Todos

