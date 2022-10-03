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

function ToDoListItems (props) {
    console.log(props.lists)
   return <ul>
   { props.lists.map(list => {
    return (
         <li>{list.description} {list.deadline}</li>
    )
    })}
        </ul>
    }

export default function Main() {
    const [listItem, setListItem] = useState(ToDoLists);
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


