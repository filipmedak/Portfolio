// React components
import { useState, useEffect } from 'react'
// Custom imports
// import Project from './Project'
// Database
import database from '../firebase/config'

const ProjectList = () => {
    // Init values
    const [projects, setProjects] = useState([])
    const [filteredProjects, setFilteredProjects] = useState([])
    const [error, setError] = useState()

    // Fetch data from database
    useEffect(() => {
        database.collection('projects').get()
        .then(response => {
            const fetchedProjects = []
            response.docs.forEach(document => {
            const fetchedProject = {
                id: document.id,
                ...document.data()
            }
            fetchedProjects.push(fetchedProject);
            })
            setProjects(fetchedProjects)
            setFilteredProjects(fetchedProjects)
        })
        .catch(error => {
            setError(error)
        })
    }, [])
 
    // Filter projects depending on type
    const filterProjects = (type) => {
        setFilteredProjects(projects.filter(project => project.type === type))
    }

    // Display error if catched
    error && console.log(error)

    return (
        <>
            <h2 className='project-section-heading'>Latest Work</h2>
            <div className='project-filter'>
                <p onClick={() => {filterProjects('Web Design')}}>Web design</p>
                <span>|</span>
                <p onClick={() => {filterProjects('Graphic Design')}}>Graphic Design</p>
                <span>|</span>
                <p>Multimedia</p>
            </div>        

            {filteredProjects && filteredProjects.map(project => {
                return (
                    <div className='project' key={project.name} onClick={() => console.log('Detailed project')}>
                        <div className='image-box'>
                            <img src={project.mainImg} className='project-main-image' alt='Project main'></img>
                        </div>
                        <p className='project-name'>{project.name}</p>
                        <p className='project-type'>{project.type}</p>
                        <span className='project-link'>View details →</span>
                    </div>
                )
            })}
        </>
    )
}

export default ProjectList