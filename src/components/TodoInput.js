import React, {useState} from 'react'
import { addTodo } from '../redux/actions'
import { v1 as uuid } from "uuid";
import { useDispatch} from "react-redux"


function TodoInput() {
    const [name, setName] = useState()
    const dispatch = useDispatch()
    return (
        <div className="container">
            <div className="row m-2">
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    className="col form-control" 
                />
                <button className="btn btn-primary mx-2" 
                    onClick={() => {
                        dispatch(
                            addTodo(
                                {
                                    id: uuid(),
                                    name: name
                                }
                            )
                        )
                        setName("");
                    }}
                >Add</button>
            </div>
        </div>
    )
}

export default TodoInput
