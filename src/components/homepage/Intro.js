// React Router
import { Link } from 'react-router-dom'
// Images
import IntroIllustration from '../../img/intro-illustration.svg'

const Intro = () => {
    return (
        <div className='intro'>
            <div className='intro-text'>
                <h1 className='intro-text-one'>Passionate Web</h1>
                <h1 className='intro-text-two'>Developer</h1>
                <p>Looking for a simple, clean and unique <br/> website design and app design?</p>
                <div className='intro-buttons'>
                    <a className='resume-button' href='https://firebasestorage.googleapis.com/v0/b/portfolio-1d829.appspot.com/o/documents%2FCV_Filip-Medak.pdf?alt=media&token=57808013-dc63-47a9-9e85-d3bdf2be5b72'>Resume</a>
                    <Link className='contact-button' to='/contact'>Contact me</Link>
                </div>
            </div>
           <div className='intro-image'>
                <img src={IntroIllustration} className='intro-illustration' alt='Personal Illustration'/>
           </div>
        </div>
    )
}

export {Intro as default}