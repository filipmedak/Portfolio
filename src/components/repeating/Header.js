// React Components
import { useState } from 'react'
// React Router Components
import { Link } from 'react-router-dom'
// Images
import BehanceLogo from '../../img/behance-logo.svg'
import GithubLogo from '../../img/github-logo.svg'
import HamburgerIcon from '../../img/hamburger-icon.svg'
import XIcon from '../../img/x-icon.svg'

const Header = () => {

    // Init values
    const [sideMenu, setSideMenu] = useState(false)

    // Toggle side menu
    const toggleHeader = () => {
        setSideMenu(!sideMenu)

        // Grab elements & remove/add classes
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

    // Sticky navigation
    window.onscroll = () => {
        const headerElement = document.querySelector('header')
        let offset = headerElement.offsetTop

        offset > 50 ? headerElement.classList.add('sticky-header') : headerElement.classList.remove('sticky-header')

    }

    return (
        <>
            <header>
                <div className='main-logo-container'>
                    <Link className='main-logo' to='/'>FM</Link>
                </div>
                <div className='header-icons'>
                    <img src={GithubLogo} alt='Github Logo'/>
                    <img src={BehanceLogo} alt='Behance Logo'/>
                    <img src={HamburgerIcon} onClick={() => toggleHeader()} className='hamburger-icon' alt='Hamburger Icon'/>
                </div>
                <div className='side-menu d-none' onClick={() => toggleHeader()}>
                    <img src={XIcon} className='x-sign' alt='X sign'></img>
                    <div className='side-menu-list'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About me</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </div>
                {sideMenu && <div className='opacity-blocker' onClick={() => toggleHeader()}></div>}
            </header>
        </>
    )
}

export {Header as default}         