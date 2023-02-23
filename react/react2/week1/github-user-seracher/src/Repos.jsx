import { useContext} from 'react';
import { SearchContext } from './UserContext'


const RepoOfHyf = () => {
    const { repos, setRepos } = useContext(SearchContext)

        fetch('https://api.github.com/users/HackYourFuture-CPH/repos')
        .then(res => res.json())
        .then(data => {
            setRepos(data)
        });
 
    const hyfRepo = repos.map(repo => {
        return (<li key={repo.id}> 
        <a href={repo.html_url}>{repo.name}</a>
        </li>
        )
    })

    return (
        <ul className='repo-ul'>
            {hyfRepo}
        </ul>
    )
}

export default RepoOfHyf