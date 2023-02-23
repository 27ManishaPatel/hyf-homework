import React, {useState} from "react";


const ToDoLists = [
    {
        id : 1,
        description: "Get out of bed",
        deadline: "Wed Sep 13 2017"
    },
    {
        id : 2,
        description: "Brush teeth",
        deadline: "Thu Sep 14 2017"
    },
    {
        id : 3,
        description: "Eat breakfast",
        deadline: "Fri Sep 15 2017"
    }
];



export default function Main() {
    const [listItem, setListItem] = useState(ToDoLists);

    const DeleteList = (id) => {
        const NewList = listItem.filter(li => li.id !== id)
        setListItem(NewList)
    }

    const CheckedList = (id)=> {
        setListItem(
            listItem.map(li => {
                if(li.id === id){
                    return{
                        ...li, completed : !li.completed
                    }
                }
                return li
            })
        )
    }

    function ToDoListItems (props) {

        return <ul>
        { props.lists.map(list => {
     
         return (
              <li key={list.id} className={` list-item ${list.completed ? "completed" : " "}`} >
                <button onClick={()=> CheckedList(list.id)} className="checked-button"><div className="checked-mark"></div></button>
                {list.description} {list.deadline} 
              <button onClick={()=> DeleteList(list.id)} className="delete-button">Delete</button>
              </li>
         )
         })}
             </ul>
         }

    const AddList = ()=>{
        const ArrayLength = listItem.length
        const NewListName = {
            id : ArrayLength + 1,
            description: "Random",
            deadline: "Text"
        };
        const NewList = listItem.concat(NewListName);
        setListItem(NewList)
    }

    return (<main className="to-do-content">
        <button onClick={AddList} className="add-Button">Add ToDo</button>
        <ToDoListItems lists ={listItem} />
    </main>
    )
};


