
import { createContext, useState } from "react";
export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [input,setInput] = useState("");
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    const [result,setResult] = useState([]);

    return(
    <SearchContext.Provider value={{
        input ,
       setInput,
        loading,
         setLoading,
         error,
         setError,
         result,
         setResult
    }}>{children}</SearchContext.Provider>
    );
};

export default SearchProvider;