// React Router
import React, { useState } from 'react'
// React Spring
import {animated, useSpring} from 'react-spring'
// Email form
import emailjs from 'emailjs-com'

const Contact = () => {
    // Init values
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [finished, setFinished] = useState(false)

    // Form function
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hkgltqs', 'template_4l0hiqd', e.target, 'user_yRsi7UWeVUVUvnuFhIq7H')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        e.target.reset()
        setFinished(true)
    }

    // Reset to top 
    window.scroll({ top:0, left:0, behavior:'auto'})

    // Animations
    const props = useSpring({
        config: {duration: 750},
        from: {opacity: 0},
        to: {opacity: 1},
    })

    return (
        <animated.div style={props} className='contact fade-in-left'>
            <div className='contact-heading-container'>
                <h1 className='contact-main-heading'>Contact me.</h1>
                <p className='contact-heading-email'>email: filip.medak213@gmail.com</p>
            </div>

            {finished && <p className='contact-finish-text fade-in-bottom'>E-Mail has been sent. Thank you.</p>}

            <form onSubmit={sendEmail} id='form'>
                <label>
                    Your name : <br/>
                    <input
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required 
                    />
                </label>
                <label>
                    Your e-mail : <br/>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required 
                    />
                </label>
                <label>
                    Your subject : <br/>
                    <input
                        name="subject"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                    />
                </label> 
                <label>
                    Your message :<br/>
                    <textarea 
                    rows='10' 
                    cols='50' 
                    name='message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                    >
                    </textarea>
                </label>
                <input className='contact-submit-button' type='submit' value='Send'></input>
            </form>
        </animated.div>
    )
}

export {Contact as default}