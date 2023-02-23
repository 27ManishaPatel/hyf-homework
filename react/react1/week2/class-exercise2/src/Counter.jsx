import React, {useState} from "react";
import "./App.css"

export default function Counter ({
    limit = 3
}){
    const [count, setCount] = useState(0);

    const disabled = count === limit;
    const message = "This is disabled now !";
    
    function handleClick () {
        setCount(count + 1)
    }

return(
<div>
<button onClick={handleClick} disabled={disabled} >{ count }/{limit}</button>
{
  disabled && <p className="message">{message}</p>
}
</div> 
)
}