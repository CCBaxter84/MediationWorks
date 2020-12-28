import * as React from 'react';
import './AboutMark.css';
//@ts-ignore
import photo from '../../images/circle.jpg';

function AboutMark() {
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