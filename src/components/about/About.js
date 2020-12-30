// React Components
import React, { useEffect, useState } from 'react'
// React Router Components
import { Link } from 'react-router-dom'
// React Spring
import {animated, useSpring} from 'react-spring'
// Image
import Avatar from '../../img/avatar.svg'
// Database
import { database } from '../../firebase/config'

const Contact = () => {

    // Variable for pdf url
    const [file, setFile] = useState()

    // Reset to top 
    window.scroll({ top:0, left:0, behavior:'auto'})

    // Fetch project data from database
    useEffect(() => {
        database.collection('files').get()
        .then(response => {
            const fetchedData = []
            response.docs.forEach(document => {
            const fetchedDocument = {
                id: document.id,
                ...document.data()
            }
            fetchedData.push(fetchedDocument);
            })
            setFile(fetchedData[0])
        })
    }, [])

    // Animations
    const props = useSpring({
        config: {duration: 750},
        from: {opacity: 0},
        to: {opacity: 1},
    })

    return (
        <animated.div style={props} className='about fade-in-bottom'>
            <div className='about-text-container'>
                <h1 className='about-heading'>About me.</h1>
                <p className='about-text-1'>Hello, my name is <b>Filip Medak</b>.</p>
                <p className='about-text-2'>I’m a Multimedia Engineer that specializes in <b>web development</b>, as well as <b>graphic design</b>.</p>
                <p className='about-text-3'>For more information, click on of the buttons below.</p>
                <div className='about-buttons-container'>
                    <Link className='about-projects-button' to='/'>Projects</Link>
                    <a className='about-resume-button' href={file && file.url}>Resume</a>
                </div>
            </div>
            <div className='about-image-container'>
                <img src={Avatar} className='about-image-avatar' alt="Filip's virtual avatar"></img>
            </div>
        </animated.div>
    )
}

export {Contact as default}