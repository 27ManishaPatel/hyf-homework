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
    return (<main className="to-do-content">
        <ul>
            {ToDoLists.map(list => <ToDoListItems list={list} key={list.id}/>)}
        </ul>
    </main>
    )
};

function ToDoListItems ({list}) {
return (<li>{list.description}, {list.deadline} </li>)
}