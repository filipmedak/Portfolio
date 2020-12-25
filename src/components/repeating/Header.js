// React Components
import { useState } from 'react'
// Custom Components
import SideMenu from './SideMenu'
// React Router Components
import { Link } from 'react-router-dom'
// Images
import BehanceLogo from '../../img/behance-logo.svg'
import GithubLogo from '../../img/github-logo.svg'
import HamburgerIcon from '../../img/hamburger-icon.svg'


const Header = () => {
    // Init values
    const [sideMenu, toggleSideMenu] = useState(false)

    // Sticky navigation
    window.onscroll = () => {
        const headerElement = document.querySelector('header')
        let offset = headerElement.offsetTop

        offset > 50 ? headerElement.classList.add('sticky-header') : headerElement.classList.remove('sticky-header')
    }

    // Stop scroll on active SideMenu
    const bodyElement = document.querySelector('body')
    sideMenu ? bodyElement.classList.add('stop-scroll') : bodyElement.classList.remove('stop-scroll')

    return (
        <>
            <header>
                <div className='main-logo-container'>
                    <Link className='main-logo' to='/'>FM</Link>
                </div>
                <div className='header-icons'>
                    <img src={GithubLogo} alt='Github Logo'/>
                    <img src={BehanceLogo} alt='Behance Logo'/>
                    <img src={HamburgerIcon} onClick={() => toggleSideMenu(!sideMenu)} className='hamburger-icon' alt='Hamburger Icon'/>
                </div>
                <SideMenu sideMenu={sideMenu} toggleSideMenu={toggleSideMenu} />
                {sideMenu && <div onClick={() => toggleSideMenu(!sideMenu)} className='opacity-blocker'></div>}
            </header>
        </>
    )
}

export {Header as default}         