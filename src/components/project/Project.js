// React 
import { useContext } from 'react'
// Context
import AppContext from '../../context/app-context'

const Project = () => {
    // Context values
    const { activeProject, databaseSoftware } = useContext(AppContext)
    // Init values
    const imageGallery = activeProject.imageGallery
    const projectSoftware = activeProject.software
    const filteredSoftware = databaseSoftware.filter(element => projectSoftware.includes(element.name))

    return (
        <div className='active-project'>
            <div className='active-project-heading'>
                <h1>{activeProject.name}</h1>
                <p>{activeProject.type}</p>
            </div>
            <div className='active-project-links'>
                <a href={activeProject.codeUrl}>View code →</a>
                <span>|</span>
                <a href={activeProject.liveUrl}>View live →</a>
            </div>
            <div className='active-project-main-image-container'> 
                <div className='active-project-main-image' style={{backgroundImage: `url(${activeProject.mainImage})`}}></div>
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
                    imageGallery && imageGallery.map(image => {
                        return (
                            <div className='active-project-image-container' key={image}>
                                <div className='active-project-image' style={{backgroundImage: `url(${image})`}}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export { Project as default }