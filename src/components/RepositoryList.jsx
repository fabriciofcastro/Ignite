import { useState, useEffect } from "react"
import { RepositoryItem } from "./repositoryIntem"
import '../styles/repositories.scss'

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]) ;

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (

    <section class="repository-list">
        <h1>Lista de repositorios</h1>

        <ul>
            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository = {repository} />
        })}
            
        </ul>
    </section>
    )
}