import React from "react"
import TodoItems from "./TodoItems"
import {useSelector} from "react-redux"

function TodoList () {
    const todos = useSelector(state => state)
    return(
        <div className="my-5">
           {
               todos.map(todo => {
                   return <TodoItems key={todo.id} todo={todo}/>
               })
           }
        </div>
    )
}

export default TodoList