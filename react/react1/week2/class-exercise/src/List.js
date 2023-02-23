import React, {useState} from "react";
import './Counter.css';

const Heading = (props) => {
    return <h1>{props.text}</h1>
}
const ListArray = ['Todo 1', 'Todo 2', 'Todo 3']

const Lists = (props) => {
    return (
        <li>{props.todo}</li>
    )
}
console.log(Lists)

const ToDoList = (props) => {
    return <ul>
        {props.todos.map(todo => {
            return (
                < Lists todo={todo} key={todo} />
            )
        })}
    </ul>
}
function TodoList() {
    const [todos, setTodos] = useState(ListArray)
    const AddList = () => {
        const ArrayLength  = todos.length
        const NewListName = `Todo ${ArrayLength + 1}` ;
        const newList = todos.concat(NewListName)
        setTodos(newList)
         console.log( NewListName )
     }
    return (
        <div className="todolist">
            <Heading text="ToDo List" />
            <ToDoList todos={todos} />
            <button onClick={AddList}>Add List</button>
        </div>
    )
}

export default TodoList