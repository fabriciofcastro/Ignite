const repositoryName = 'unform2'
import { RepositoryItem } from "./repositoryIntem"

import '../styles/repositories.scss'

const repository = {
    name: 'UNFORM',
    description: 'Forms in React',
    link: 'https://www.github.com/'
}

export function RepositoryList() {
    return (

    <section class="repository-list">
        <h1>Lista de repositorios</h1>

        <ul>
           <RepositoryItem repository = {repository} />
           <RepositoryItem repository = {repository}/>
           <RepositoryItem repository = {repository}/>
           <RepositoryItem repository = {repository}/>
           <RepositoryItem repository = {repository} />
        </ul>
    </section>
    )
}