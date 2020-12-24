import * as React from 'react';
import { useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ source, setSource ] = useState('');

  function handleChange(event: any) {
    const { name, value } = event.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    } else if (name === 'source') {
      setSource(value);
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(`${firstName} ${lastName} ${email} ${message} ${source}`);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setSource('');
  }

  return (
    <section id='contact' className='form-container'>
      <article id='work-together'>
        <h2>Let's Work Together!</h2>
        <h4>Please take a moment to fill out this form, and I'll follow up with you</h4>
      </article>
      <form onSubmit={handleSubmit}>
        <label>Your First Name
          <input type='text' name='firstName' value={firstName} onChange={handleChange}/>
        </label>
        <label>Your Last Name
          <input type='text' name='lastName' value={lastName} onChange={handleChange}/>
        </label>
        <label>Your Email
          <input type='text' name='email' value={email} onChange={handleChange}/>
        </label>
        <label>How can I help you?
          <input type='textarea' name='message' value={message} onChange={handleChange}/>
        </label>
        <label>How did you hear about me?
          <input type='textarea' name='source' value={source} onChange={handleChange}/>
        </label>
        <input id='submit-btn' type='submit' value='Submit'/>
      </form>
    </section>
  );
}

export default ContactForm;