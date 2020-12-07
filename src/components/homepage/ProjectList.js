// React components
import { useState, useEffect } from 'react'
// Database
import database from '../../firebase/config'

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
        // Grab filter elements & remove classes 
        const filterElements = document.querySelector('.project-filter').querySelectorAll('p')
        filterElements.forEach((element) => { 
            element.removeAttribute('class') 
            element.classList.add('lower-opacity')

            // Add class to active filter element
            if(element.textContent === type){
                const elementClass = element.textContent.toLocaleLowerCase().replace(' ', '-')
                element.classList.replace('lower-opacity', elementClass)
            }
        })

        // Filter projects array
        setFilteredProjects(projects.filter(project => project.type === type))
    }

    // Display error if catched
    error && console.log(error)

    return (
        <div className='project-list'>
            {/* Project Filter */}
            <h2 className='project-section-heading'>Latest Work</h2>
            <div className='project-filter'>
                <p onClick={() => {filterProjects('Web Design')}}>Web Design</p>
                <span>|</span>
                <p onClick={() => {filterProjects('Graphic Design')}}>Graphic Design</p>
                <span>|</span>
                <p onClick={() => {filterProjects('Multimedia')}}>Multimedia</p>
            </div>        

            {/* Projects list */}
            {filteredProjects && filteredProjects.map(project => {

                // Project image - type tagging
                const imageClass = project.type.toLocaleLowerCase().replace(' ', '-').concat('-image')
                const img = `url('${project.mainImg}')`
                const sectionStyle = {
                    height: '100%',
                    width: '100%',
                    backgroundImage: img,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover'
                }
                
                return (
                    <div className='project' key={project.id} onClick={() => console.log('Detailed project')}>
                        <div className='image-box'>
                            <div style={sectionStyle} className={imageClass}></div>
                        </div>
                        <div className='text-box'>
                            <p className='project-name'>{project.name}</p>
                            <p className='project-type'>{project.type}</p>
                            <span className='project-link'>View details →</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectList