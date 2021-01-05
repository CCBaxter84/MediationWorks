import * as React from 'react';
import ReactPlayer from 'react-player';
import './Video.css';

function Video() {
  return (
    <section id='video' className='video-container'>
      <article className='video-title'>
        <p>Mediation Training Video</p>
      </article>
      <section className='player-wrapper'>
        <ReactPlayer
          className='embedded-video'
          url={'https://youtu.be/S_a13w_usjM'}
          width='100%'
          height='100%'
        />
      </section>
      <article id='video-blurb'>
        <p>In early 2013, I was asked by Brian Beck of the mediation group OvalOptions to be the mediator in a workplace training video.  In the past, such videos had been done with low quality equipment with mediators and/or mediation students playing the parts of the mediators and the parties.  Resolution was almost always reached quickly, and the “actors” were not convincing.  Brian intended for this video to be different.</p>
        <p>The entire effort would be professional.  A realistic office set was constructed in a vacant office building.  A professional production crew was hired (including, video, audio, make-up and direction).  Two professional actors were hired to play the parties to the case.  An outline of a dispute between an older, male home office manager and a young, female field manager was developed, and brief notes for each party and the mediator were produced based on the conflict outline.  Finally, I was asked to mediate between the two parties/actors, just as I would in a real workplace case.  So, I did.</p>
      </article>
    </section>
  );
}

export default Video;