// React Router Components
import { Link } from 'react-router-dom'
// React Spring
import {animated, useSpring} from 'react-spring'
//Images
import XIcon from '../../img/x-icon.svg'

const SideMenu = ({sideMenu, toggleSideMenu}) => {

    // Animations
    const props = useSpring({
        config: [{duration: 1000}],
        width: sideMenu ? '100%' : '0%',
        opacity: sideMenu ? 1 : 0,
    })

    return (
        <animated.div style={props} className='side-menu' onClick={() => toggleSideMenu(!sideMenu)}>
            <img src={XIcon} className='x-sign' alt='X sign'></img>
            <div className='side-menu-list'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About me</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </animated.div>
    )
}

export { SideMenu as default }