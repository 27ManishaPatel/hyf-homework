
import React, { useContext } from "react";
import { SearchContext } from "./UserContext";
import SearchList from "./SearchList";
import { useRef } from "react";


const SearchUser = () => {
    const inputElement = useRef();
    const {  input ,
        setInput,
          setResult,
          setError,
          setLoading} = useContext(SearchContext)

    const handleClick = async (e) => {
        setInput(e.target.value)
        if(input !== ''){
            setLoading(true)
            const response = await fetch(`https://api.github.com/search/users?q=${input}`)
            const jsonData = await response.json()
            const data = await jsonData.items
            if(data.message){
                setError(data.message);
                setResult([])

            }else{
                setLoading(false);
                setError('')
            }
            setResult(data)
        }
    }
    const focusInput = () => {
        inputElement.current.focus();
    }

return (
    <div>
        <input
            type='text'
            placeholder='Search'
            value={input}
            onChange={handleClick}
            ref={inputElement}
        />
        <button onClick={focusInput}>Search</button>
        <SearchList/>
    </div>
)
};

export default SearchUser;