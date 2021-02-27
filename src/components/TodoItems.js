import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItems( {todo}) {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(todo.name)
    const dispatch = useDispatch()
    return (
        <div className="container">
            <div className="row mx-2 align-items-center" >
                <div>#{todo.id.length > 1? todo.id[2]: todo.id}</div>     
                <div className="col">
                    {
                        edit ? <input type="text" className="form-control" value={name} onChange ={(e) => setName(e.target.value)} /> : <h4>{todo.name}</h4> 
                    }
                </div>     
                <button className="btn btn-primary m-2" onClick = {() => {
                    dispatch(updateTodo(
                        {
                            ...todo,
                            name: name
                        }
                    ))
                    if (edit) {
                        setName(todo.name);

                    }
                    setEdit(!edit)}}>{edit ? "Update" : "Edit"}</button>     
                <button className="btn btn-danger m-2"  onClick={() =>dispatch(deleteTodo(todo.id))}>Delete</button>    
            </div>
        </div>
    )
}

export default TodoItems
