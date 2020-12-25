// React Router
import { Link } from 'react-router-dom'
// React Spring
import {animated, useSpring} from 'react-spring'
// Images
import IntroIllustration from '../../img/intro-illustration.svg'

const Intro = () => {

    // Animations
    const props = useSpring({
        config: {duration: 750},
        from: {opacity: 0},
        to: {opacity: 1},
    })

    return (
        <animated.div style={props} className='intro'>
            <div className='intro-text'>
                <div className='intro-text-container'>
                    <h1 className='intro-text-one'>Passionate</h1>
                    <h1 className='intro-text-two'>Multimedia</h1>
                    <h1 className='intro-text-three'>Engineer</h1>
                </div>
                <p>Looking for a simple, clean and unique design?</p>
                <div className='intro-buttons'>
                    <Link className='contact-button' to='/contact'>Contact me</Link>
                </div>
            </div>
           <div className='intro-image'>
                <img src={IntroIllustration} className='intro-illustration' alt='Personal Illustration'/>
           </div>
        </animated.div>
    )
}

export { Intro as default }