import React, { useState } from "react";
import fetchData from './Api';
import today from './CurrentDate'

 

export default function Main() {
    const [list, setList] = useState(fetchData);
    const [input, setInput] = useState('');
    const [update, setUpdate] = useState('')
    const [deadline, setDeadline] = useState(today)

    const DeleteItem = (id) => {
        const NewList = list.filter(li => li.id !== id)
        setList(NewList)
    }

    const CheckedItem = (id) => {
        setList(
            list.map(li => {
                if (li.id === id) {
                    return {
                        ...li, completed: !li.completed
                    }
                }
                return li
            })
        )
    }
    const cancelUpdate = ()=>{
        if(!update){
            alert('No Task to cancel!')
        }else{
            setUpdate('');
        };
    }
    const changeTask = (e) => {
        setUpdate({
            id: update.id,
            description: e.target.value,
            deadline: update.deadline
        })
        //
    }
    const updateTask = () => {
        if(!update){
            alert('No Task to update!')
        }else{
            let filteredTask = list.filter(task => task.id !== update.id)
            setList([...filteredTask, update])
            setUpdate('');
        }
    }
    function ToDoListItems(props) {
        

        return <ul>
            {props.lists && props.lists.length ? '' : <h3 className="message">Add your ToDo List</h3>}
            {props.lists.map(list => {
                return (
                    <li key={list.id} className={` list-item ${list.completed ? "completed" : " "}`} title="Checked/Not-Checked" >
                        <button onClick={() => CheckedItem(list.id)} className="checked-button"><div className="checked-mark"></div></button>
                        {list.description} {list.deadline}
                        <button onClick={() => DeleteItem(list.id)} className="delete-button" title="Delete">&times;</button>
                        <button className="edit-button" onClick={()=> setUpdate({
                            id:list.id,
                            description: list.description,
                            deadline: list.deadline
                        })}>Edit</button>
                    </li>
                )
            })}
        </ul>
    }

    const AddItem = (todo, date) => {
     const ArrayLength = list.length
     if(!todo){
        alert("Enter your task to do!")
     }else if(date < today){
        alert("Pick future date as a Deadline!")
     }else {
        const NewListName = {
            id: ArrayLength + 1,
            description: todo,
            deadline: date
        };
        const NewList = list.concat(NewListName);
        setList( NewList );
        setInput('')
        setDeadline(today)
     }
       
    }

    return (<main className="to-do-content">
        <form>
            <label >To Do Description:
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)}
                />
            </label>
            <br></br>
            <label >To Do Deadline:
                <input type='date' value={deadline} onChange={(e) => setDeadline(e.target.value)} />
            </label>
        </form>
        <button onClick={() => AddItem(input, deadline)} className="add-button">Add ToDo</button>
        <br></br>
        <input className="update-input"
        value={update.description}
        onChange={(e)=> changeTask(e)}
        ></input>
        <button className="button" onClick={updateTask}>Update</button>
        <button className="button" onClick={cancelUpdate}>Cancel</button>
        <ToDoListItems lists={list} />
    </main>
    )
};


