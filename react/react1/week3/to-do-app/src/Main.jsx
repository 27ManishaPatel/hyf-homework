import React, { useState } from "react";


export default function Main() {
    const [listItem, setListItem] = useState([]);
    const [input, setInput] = useState('');
    const [update, setUpdate] = useState('')
   
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    const [deadline, setDeadline] = useState(today)

    const DeleteList = (id) => {
        const NewList = listItem.filter(li => li.id !== id)
        setListItem(NewList)
    }

    const CheckedList = (id) => {
        setListItem(
            listItem.map(li => {
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
        let newTask = {
            id: update.id,
            description: e.target.value,
            deadline: e.target.value
        }
        setUpdate(newTask)
        //
    }
    const updateTask = () => {
        if(!update){
            alert('No Task to update!')
        }else{
            let filteredTask = listItem.filter(task => task.id !== update.id)
            let updatedTask = [...filteredTask, update]
            setListItem(updatedTask)
            setUpdate('');
        }
    }
    function ToDoListItems(props) {
        

        return <ul>
            {props.lists && props.lists.length ? '' : <h3 className="message">Add your ToDo List</h3>}
            {props.lists.map(list => {
                return (
                    <li key={list.id} className={` list-item ${list.completed ? "completed" : " "}`} title="Checked/Not-Checked" >
                        <button onClick={() => CheckedList(list.id)} className="checked-button"><div className="checked-mark"></div></button>
                        {list.description} {list.deadline}
                        <button onClick={() => DeleteList(list.id)} className="delete-button" title="Delete">&times;</button>
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

    const AddList = (todo, date) => {
     const ArrayLength = listItem.length
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
        const NewList = listItem.concat(NewListName);
        setListItem(NewList);
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
        <button onClick={() => AddList(input, deadline)} className="add-button">Add ToDo</button>
        <br></br>
        <input className="update-input"
        value={update && update.description}
        onChange={(e)=> changeTask(e)}
        ></input>
        <button className="button" onClick={updateTask}>Update</button>
        <button className="button" onClick={cancelUpdate}>Cancel</button>
        <ToDoListItems lists={listItem} />
    </main>
    )
};


