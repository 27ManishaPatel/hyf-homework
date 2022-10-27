import { useContext } from 'react';
import { ReposContext } from './ReposContext'


const RepoOfHyf = () => {
    const { repos } = useContext(ReposContext)
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