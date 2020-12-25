// React Router
import React, { useState } from 'react'
// Email form
import emailjs from 'emailjs-com'

const Contact = () => {
    // Init values
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

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
    }

    return (
        <div className='contact'>
            <div className='contact-heading-container'>
                <h1 className='contact-main-heading'>Contact me.</h1>
                <p className='contact-heading-email'>email: filip.medak213@gmail.com</p>
            </div>
            <form onSubmit={sendEmail} id='form'>
                <label>
                    Your name *: <br/>
                    <input
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required 
                    />
                </label>
                <label>
                    Your e-mail *: <br/>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required 
                    />
                </label>
                <label>
                    Your subject: <br/>
                    <input
                        name="subject"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                    />
                </label> 
                <label>
                    Your message * <br/>
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
        </div>
    )
}

export {Contact as default}