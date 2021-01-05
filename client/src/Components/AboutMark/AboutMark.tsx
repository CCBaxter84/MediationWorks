import * as React from 'react';
import { useState, useEffect } from 'react';
import './AboutMark.css';
//@ts-ignore
import photo from '../../images/circle.jpg';
//@ts-ignore
import useWindowSize from '../../useWindowSize.tsx';

function AboutMark() {
  const [ width, height ] = useWindowSize();
  const [ isSmallScreen, setScreen ] = useState(false);

  useEffect(() => {
    width < 755 ? setScreen(true) : setScreen(false);
  }, [width]);

  if (isSmallScreen) {
    return (
      <section id='about-mark' className='small-screen'>
        <article id='question'>
          <p>Need Help Resolving a Dispute Without the Legal Fees and Headache?</p>
        </article>
        <img id='circle-photo' src={photo} alt='Mark wearing a shirt a and tie'/>
        <article id='intro'>
          <p>Hi, I'm Mark.</p>
        </article>
        <article className='experience'>
          <p>I've been a Conflict Resolution Consultant and Group Facilitator for over 30 years</p>
          <p>I'd love to help you.</p>
        </article>
      </section>
    );
  }

  return (
    <section id='about-mark'>
      <article className='column'>
        <img id='circle-photo' src={photo} alt='Mark wearing a shirt and tie'/>
      </article>
      <article className='column' id='right-column'>
        <p id='question'>
          Need Help Resolving a Dispute Without the Legal Fees and Headache?
        </p>
        <p id='intro'>
          Hi, I'm Mark.
        </p>
        <article className='experience'>
          <p >
          I've been a Conflict Resolution Consultant and Group Facilitator for over 30 years.</p>
          <p className='experience'>I'd love to help you.</p>
        </article>
      </article>
    </section>
  );
}

export default AboutMark;