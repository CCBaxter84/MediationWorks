import * as React from 'react';
import { useState, useEffect } from 'react';
import './ContactForm.css';
import axios from 'axios';
//@ts-ignore
import useWindowSize from '../../useWindowSize.tsx';

type Helper = (event:any) => void;

function ContactForm() {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ need, setNeed ] = useState('');
  const [ source, setSource ] = useState('');
  const [ errorMsg, setErrorMsg ] = useState('');
  const [ successMsg, setSuccessMsg ] = useState('');
  const [ width, height ] = useWindowSize();
  const [ isSmallScreen, setScreen ] = useState(false);

  /*useEffect(() => {
    width < 755 ? setScreen(true) : setScreen(false);
  }, [width]); */

  const handleChange:Helper = (event: any) => {
    const { name, value } = event.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'need') {
      setNeed(value);
    } else if (name === 'source') {
      setSource(value);
    }
  };

  const handleSubmit:Helper = (event: any) => {
    event.preventDefault();
    const isAnEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (firstName === '' || lastName === '' || email === '' || need === '' || source === '') {
      setErrorMsg('Please complete all fields');
    } else if ( !isAnEmail.test(email) ) {
      setErrorMsg('Please provide an acceptable email');
    } else {
      setErrorMsg('');
      setSuccessMsg("Thanks. I'll be following up with you shortly.")
      setTimeout(() => setSuccessMsg(''), 3000);
      axios.post('/leads', {
        firstName,
        lastName,
        email,
        need,
        source
      });
      setFirstName('');
      setLastName('');
      setEmail('');
      setNeed('');
      setSource('');
    }
  };
  /*
  if (isSmallScreen) {
    return (
      <section id='contact'>

      </section>
    )
  }*/

  return (
    <>
      <section id='contact' className='form-container'>
        <article id='work-together'>
          <p id='first-line'>Let's Work Together!</p>
          <p id='second-line'>Please take a moment to fill out this form, and I'll follow up with you.</p>
        </article>
        <form onSubmit={handleSubmit}>
          <label>Your First Name
            <input className={errorMsg && !firstName ? 'error-border': ''}
              type='text' name='firstName'
              value={firstName} onChange={handleChange}
            />
          </label>
          <label>Your Last Name
            <input className={errorMsg && !lastName ? 'error-border': ''}
              type='text' name='lastName'
              value={lastName} onChange={handleChange}
            />
          </label>
          <label>Your Email
            <input className={errorMsg && !email ? 'error-border': ''}
              type='text' name='email'
              value={email} onChange={handleChange}
            />
          </label>
          <label>How can I help you?
            <input className={errorMsg && !need ? 'error-border': ''}
              type='textarea' name='need'
              value={need} onChange={handleChange}
            />
          </label>
          <label>How did you hear about me?
            <input className={errorMsg && !source ? 'error-border': ''}
              type='textarea' name='source'
              value={source} onChange={handleChange}
            />
          </label>
          <input id='submit-btn' type='submit' value='Submit'/>
          <article>
            <p id='error-msg'>{errorMsg}</p>
            <p id='success-msg'>{successMsg}</p>
          </article>
        </form>

      </section>
      <footer>
        <article>
          <p>Mediation Works 2, LLC</p>
          <p>a locally-owned small business </p>
          <p>based in Golden, Colorado</p>
        </article>
      </footer>
    </>

  );
}

export default ContactForm;