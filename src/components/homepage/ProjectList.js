// React components
import { useContext, useState, useEffect } from 'react'
// React Spring
import {animated, useSpring} from 'react-spring'
// React Router
import { Link } from 'react-router-dom'
// Context
import AppContext from '../../context/app-context'
// Database
import database from '../../firebase/config'

const ProjectList = () => {
    // Context Values
    const { setActiveProject, setDatabaseSoftware } = useContext(AppContext)

    // Init values
    const [projects, setProjects] = useState([])
    const [filteredProjects, setFilteredProjects] = useState([])
    const [error, setError] = useState()

    // Fetch project data from database
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

    // Fetch software data from database
    useEffect(() => {
        database.collection('software').get()
        .then(response => {
            const fetchedSoftware = []
            response.docs.forEach(document => {
            const fetchedItem = {
                id: document.id,
                ...document.data()
            }
            fetchedSoftware.push(fetchedItem)
            })
            setDatabaseSoftware(fetchedSoftware)
        })
        // eslint-disable-next-line
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

    // Reset page to top
    const resetPagePosition = () => {
        window.scroll(0, 0)
        // window.scroll({ top:0, left:0, behavior:'auto'})
    }

    // Animations
    const props = useSpring({
        config: {duration: 750},
        from: {opacity: 0},
        to: {opacity: 1},
    })

    // Sort project (Web design, Graphic design, Multimedia)
    filteredProjects.sort((a, b) => (a.sortValue > b.sortValue) ? -1 : 1)

    return (
        <animated.div style={props} className='project-list'>
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
                const img = `url('${project.mainImage}')`
                const sectionStyle = {
                    height: '100%',
                    width: '100%',
                    backgroundImage: img,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover'
                }
                
                return (
                    <Link 
                        to='/project' 
                        onClick={() => {
                            setActiveProject(project)
                            resetPagePosition()
                        }} 
                        id={`project-${project.id}`} 
                        key={project.id}
                    >
                        <div className='project'>
                            <div className='image-box'>
                                <div style={sectionStyle} className={imageClass}></div>
                            </div>
                            <div className='text-box'>
                                <p className='project-name'>{project.name}</p>
                                <p className='project-type'>{project.type}</p>
                                <span className='project-link'>View details</span><span className='project-link-arrow'>→</span>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </animated.div>
    )
}

export default ProjectList