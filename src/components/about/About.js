// React Components
import React from 'react'
// React Router Components
import { Link } from 'react-router-dom'
// Image
import Avatar from '../../img/avatar.svg'

const Contact = () => {
    return (
        <div className='about'>
            <div className='about-text-container'>
                <h1 className='about-heading'>About me.</h1>
                <p className='about-text-1'>Hello, my name is <b>Filip Medak</b>.</p>
                <p className='about-text-2'>I’m a Multimedia Engineer that specializes in <b>web design</b> & <b>development</b>, as well as <b>graphic design</b>.</p>
                <p className='about-text-3'>For more information, click on of the buttons below.</p>
                <div className='about-buttons-container'>
                    <Link className='about-projects-button' to='/'>Projects</Link>
                    <a className='about-resume-button' href='https://firebasestorage.googleapis.com/v0/b/portfolio-1d829.appspot.com/o/documents%2FFilipMedak-ENG.pdf?alt=media&token=0c251439-58a3-43e0-a9f6-da0fdb5eb6d7'>Resume</a>
                </div>
            </div>
            <div className='about-image-container'>
                <img src={Avatar} className='about-image-avatar' alt="Filip's virtual avatar"></img>
            </div>
        </div>
    )
}

export {Contact as default}