// React components
import { useState } from 'react'
// Images
import BehanceLogo from '../img/behance-logo.svg'
import GithubLogo from '../img/github-logo.svg'
import HamburgerIcon from '../img/hamburger-icon.svg'
import XIcon from '../img/x-icon.svg'

const Header = () => {

    // Init values
    const [sideMenu, setSideMenu] = useState(false)

    // Toggle side menu
    const toggleHeader = () => {
        setSideMenu(!sideMenu)

        const menuElement = document.querySelector('.side-menu')
        const bodyElement = document.querySelector('body')

        if(!sideMenu) {
            menuElement.classList.remove('d-none')
            bodyElement.classList.add('stop-scroll')
        } else {
            menuElement.classList.add('d-none')
            bodyElement.classList.remove('stop-scroll')
        }
    }

    return (
        <header>
            <div className='main-logo-container'>
                <p className='main-logo'>FM</p>
            </div>
            <div className='header-icons'>
                <img src={GithubLogo} alt='Github Logo'/>
                <img src={BehanceLogo} alt='Behance Logo'/>
                <img src={HamburgerIcon} onClick={() => toggleHeader()} className='hamburger-icon' alt='Hamburger Icon'/>
            </div>
            <div className='side-menu d-none'>
                <img src={XIcon} className='x-sign' onClick={() => toggleHeader()} alt='X sign'></img>
                <div className='side-menu-list'>
                    <a href='https://bruh.com'>Home page</a>
                    <a href='https://bruh.com'>Projects</a>
                    <a href='https://bruh.com'>About me</a>
                    <a href='https://bruh.com'>Contact</a>
                </div>
            </div>
        </header>
    )
}

export {Header as default}         