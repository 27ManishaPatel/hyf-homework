import React, {useState} from 'react';


const Counter = (props) => {
    const [myCount, setMyCount] = useState(props.countFrom)
    return (
        <div>
            <button onClick={()=>setMyCount(myCount+1)}>
                Count {myCount}
            </button>
        </div>
    )
}

export default Counter;