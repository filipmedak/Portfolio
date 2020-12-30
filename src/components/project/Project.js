// React 
import { useContext, useEffect } from 'react'
// React Spring
import {animated, useSpring} from 'react-spring'
// Context
import AppContext from '../../context/app-context'

const Project = () => {
    // Context values
    const { activeProject, databaseSoftware } = useContext(AppContext)

    // Save active project information in case of refresh
    useEffect(() => {
        localStorage.setItem('active-project', JSON.stringify(activeProject))
        localStorage.setItem('database-software', JSON.stringify(databaseSoftware))
    }, [ activeProject, databaseSoftware ])

    // Init values
    let imageGallery = activeProject.imageGallery
    let projectSoftware = activeProject.software
    let filteredSoftware = databaseSoftware.filter(element => projectSoftware.includes(element.name))
    let projectTypeClass = activeProject.type.toLocaleLowerCase().replace(' ', '-').concat('-border')

    // Animations
    const props = useSpring({
        config: {duration: 750},
        from: {opacity: 0},
        to: {opacity: 1},
    })

    return (
        <animated.div style={props} className='active-project'>
            <div className='active-project-heading'>
                <h1 className={projectTypeClass}>{activeProject.name}</h1>
                <p>{activeProject.type}</p>
            </div>
            <div className='active-project-links'>
                <a href={activeProject.codeUrl} className={!activeProject.codeUrl ? 'lower-opacity' : ''}>View code →</a>
                <span>|</span>
                <a href={activeProject.liveUrl} className={!activeProject.liveUrl ? 'lower-opacity' : ''}>View live →</a>
            </div>
            <div className='active-project-main-image-container'> 
                <a href={activeProject.liveUrl ? activeProject.liveUrl : activeProject.codeUrl}>
                    <div className='active-project-main-image' style={{backgroundImage: `url(${activeProject.mainImage})`}}></div>
                </a>
            </div>
            <div className='active-project-software-list-container'>
                <h2>Software used</h2>
                {
                    filteredSoftware && filteredSoftware.map(software => {
                        return (
                            <div className='active-project-software' key={software.name}>
                                <img src={software.icon} alt='Software icon'></img>
                                <p>{software.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='active-project-description'>
                <h2>Description</h2>
                <p>{activeProject.description}</p>
            </div>
            <div className='active-project-image-gallery'>
                {
                    (imageGallery && imageGallery[0]) && imageGallery.map(image => {
                        return (
                            <div className='active-project-image-container' key={image}>
                                <div className='active-project-image' style={{backgroundImage: `url(${image})`}}></div>
                            </div>
                        )
                    })
                }
            </div>
        </animated.div>
    )
}

export { Project as default }