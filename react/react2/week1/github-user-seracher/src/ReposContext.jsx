import  {useEffect, useState, createContext} from 'react';

 export const ReposContext = createContext()

const ReposProvider = ({children}) => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/HackYourFuture-CPH/repos')
        .then(res => res.json())
        .then(data => {
            setRepos(data)
        });
    }, [])
    return(
        <ReposContext.Provider value={{repos}}>
            {children}
        </ReposContext.Provider>

    )
}
export default  ReposProvider