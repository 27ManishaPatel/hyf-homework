import React, { useContext } from "react";
import { SearchContext } from "./UserContext";



const SearchList = () => {
    const {
        result,
        setLoading,
        error,

    } = useContext(SearchContext)

    const listUser = result.map(li => <li key={li.id}><img src={li.avatar_url} width='40px' alt='profile pic'></img>
            <a href={li.html_url}>{li.login}</a>
        </li>)  

    return (
        <>
            {setLoading && <p>Loading.....</p>}
            {error && <p>{error}</p>}
            {result.length === 0 && !error ?
                <p>No User </p> :
                <ul className='repo-ul'>
                {listUser}
            </ul>
            }
           
        </>

    )
};

export default SearchList;